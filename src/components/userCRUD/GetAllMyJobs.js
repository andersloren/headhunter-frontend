// Libraries, functions, etc.
import axios from "axios";
import { useEffect, useState } from "react";
import { deleteJob } from "./jobFunctions/deleteJob";
import { generateJobAd } from "./jobFunctions/generateJobAd";
import { updateJob } from "./jobFunctions/updateJob";
import { extractEmailFromToken } from "../security/token/extractEmailFromToken";
import { getJobById } from "./jobFunctions/getJobById";

// Custom components
import Button from "../utils/buttons/Button";
import AddJob from "./AddJob";
import Preview from "./Preview";

// CSS
import "./userCrud.css";
import "./table.css";

export default function GetAllMyJobs() {
  const [ad, setAd] = useState({});
  const [jobList, setJobList] = useState([]);
  const [addVisible, setAddVisible] = useState(false);
  const [refreshTable, setRefreshTable] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [description, setDescription] = useState("");
  const [instruction, setInstruction] = useState("");
  const [htmlCode, setHtmlCode] = useState("");
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

  function handleUpdate(id, description, instruction, htmlCode) {
    updateJob(id, handleCRUDSuccess, description, instruction, htmlCode);
  }

  function handlePreview(id) {
    setPreviewVisible((preview) => !preview);
    getJobById(id, setAd, setDescription, setInstruction, setHtmlCode);
  }

  function handleGenerate(id, setPreviewVisible) {
    generateJobAd(id, handleCRUDSuccess, handlePreview, setPreviewVisible);
  }

  function handleActiveField(textInput) {}

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
    <div>
      <div>
        <div>
          <h1 className="">Found Jobs</h1>
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Description</th>
                  <th>Instruction</th>
                  <th>HTML Code</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {jobList.map((job) => (
                  <tr key={job.id}>
                    <td>{job.id}</td>
                    <td>
                      {job.description
                        ? `${job.description.slice(0, 40)}...`
                        : ""}
                    </td>
                    <td>
                      {job.instruction
                        ? `${job.instruction.slice(0, 20)}...`
                        : ""}
                    </td>
                    <td>
                      {job.htmlCode ? `${job.htmlCode.slice(0, 40)}...` : ""}
                    </td>
                    <td>
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
              <Preview
                description={description}
                instruction={instruction}
                htmlCode={htmlCode}
                setDescription={setDescription}
                setInstruction={setInstruction}
                setHtmlCode={setHtmlCode}
                handleUpdate={handleUpdate}
                handleAddVisible={handleAddVisible}
                handleActiveField={handleActiveField}
                ad={ad}
              />
            )}
          </div>
        </div>
      </div>
      {addVisible && <AddJob onAddSuccess={handleCRUDSuccess} />}
    </div>
  );
}
