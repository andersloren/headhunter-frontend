// Libraries, functions, etc.
import axios from "axios";
import { useEffect, useState } from "react";
import { deleteJob } from "./jobFunctions/deleteJob";
import { generateJobAd } from "./jobFunctions/generateJobAd";

// Custom components
import Button from "../utils/buttons/Button";
import AddJob from "./AddJob";

// CSS
import "./userCrud.css";
import "./table.css";
import { extractEmailFromToken } from "../utils/token/extractEmailFromToken";
import { getJobById } from "./jobFunctions/getJobById";
import HtmlCodeDisplay from "./htmlPurifier/HtmlCodeDisplay";

export default function GetAllMyJobs() {
  const [ad, setAd] = useState({});
  const [jobList, setJobList] = useState([]);
  const [addVisible, setAddVisible] = useState(false);
  const [refreshTable, setRefreshTable] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const email = extractEmailFromToken();

  useEffect(() => {
    getAllMyJobs();
  }, [refreshTable]);

  useEffect(() => {
    getAllMyJobs();
  }, []);

  function handleAddVisible() {
    setAddVisible((vis) => !vis);
  }

  function handleCRUDSuccess() {
    setRefreshTable((refresh) => !refresh);
  }

  function handleDelete(id) {
    deleteJob(id, handleCRUDSuccess);
  }

  function handlePreview(id) {
    setPreviewVisible((preview) => !preview);
    getJobById(id, setAd);
  }

  function handleGenerate(id) {
    generateJobAd(id, handleCRUDSuccess, handlePreview);
  }

  async function getAllMyJobs() {
    const url = `http://localhost:8080/api/v1/jobs/findAllJobsByUserEmail/${email}`;

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
          "Content-Type": "application/json",
        },
      });
      setJobList(response.data.data);
    } catch (error) {
      console.error("Error get all", error);
    }
  }

  return (
    <div className="main">
      <div>
        <h1 className="">Found Jobs</h1>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Description</th>
                <th>HTML Code</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {jobList.map((job) => (
                <tr key={job.id}>
                  <td>{job.id}</td>
                  <td>{job.description.slice(0, 40)}...</td>
                  <td>
                    {job.htmlCode ? `${job.htmlCode.slice(0, 40)}...` : ""}
                  </td>
                  <td>
                    <Button
                      key={["edit", job.id]}
                      id={job.id}
                      icon="glyphicon glyphicon-pencil"
                    ></Button>
                    <Button
                      key={["view", job.id]}
                      id={job.id}
                      icon="glyphicon glyphicon-eye-open"
                      onHandleClick={() => handlePreview(job.id)}
                    ></Button>
                    <Button
                      key={["remove", job.id]}
                      id={job.id}
                      icon="glyphicon glyphicon-remove"
                      onHandleClick={() => handleDelete(job.id)}
                    ></Button>
                    <Button
                      key={["generate", job.id]}
                      id={job.id}
                      icon="glyphicon glyphicon-flash"
                      onHandleClick={() => handleGenerate(job.id)}
                    ></Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {previewVisible && (
            <div className="preview">
              <HtmlCodeDisplay htmlCode={ad.htmlCode} />
            </div>
          )}
          <Button
            icon="glyphicon glyphicon-plus"
            onHandleClick={handleAddVisible}
          ></Button>
        </div>
      </div>
      {addVisible && <AddJob onAddSuccess={handleCRUDSuccess} />}
    </div>
  );
}
