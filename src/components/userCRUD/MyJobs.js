// Libraries, functions, etc.
import axios from "axios";
import { useEffect, useState } from "react";
import { addJob } from "./jobFunctions/addJob.js";
import { extractEmailFromToken } from "../security/token/extractEmailFromToken.js";
import { getJobById } from "./jobFunctions/getJobById.js";

import { deleteJob } from "./jobFunctions/deleteJob.js";
import { updateJob } from "./jobFunctions/updateJob.js";
import { generateJobAd } from "./jobFunctions/generateJobAd.js";

// Custom components
// import AddJob from "./AddJob.js";
import Preview from "./Preview.js";

// CSS
import "./userCrud.css";
import "./table.css";
import {
  S_WindowSplit_MyJobs,
  S_Title_MyJobs,
  S_HeadingBox_MyJobs,
  S_Button_Squared,
  S_Preview_MyJobs,
  // S_Table_MyJobs,
  // S_Table_Headers_MyJobs,
  // S_Table_Data_MyJobs,
  // S_Table_Rows_MyJobs,
  // S_Table_Box_MyJobs,
  S_Button_AddJob_MyJobs,
  S_JobList_Box_MyJobs,
  S_JobList_Heading_MyJobs,
  S_JobList_Jobs_MyJobs,
} from "./styledComponents.js";
import { S_Main } from "../utils/styledMain.js";

export default function MyJobs() {
  const [activeId, setActiveId] = useState(null);

  const [ad, setAd] = useState({});
  const [jobList, setJobList] = useState([]);
  const [refreshTable, setRefreshTable] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [instruction, setInstruction] = useState("");
  const [htmlCode, setHtmlCode] = useState("");

  const email = extractEmailFromToken();

  console.log(ad);

  useEffect(() => {
    getAllMyJobs();
  }, [refreshTable]);

  useEffect(() => {
    getAllMyJobs();
  }, []);

  function handleCRUDSuccess() {
    setRefreshTable((refresh) => !refresh);
  }

  function handleAddJob() {
    addJob(handleCRUDSuccess); // rename this and the file holding this function
  }

  function handleUpdate(id, title, description, instruction, htmlCode) {
    updateJob(id, handleCRUDSuccess, title, description, instruction, htmlCode);
  }

  function handleGenerate(id, setPreviewVisible) {
    generateJobAd(id, handleCRUDSuccess, handlePreview, setPreviewVisible);
  }

  function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this job?")) {
      deleteJob(id, handleCRUDSuccess);
      setPreviewVisible(false);
    } else {
      console.log("User cancelled delete");
    }
  }

  function handlePreview(id) {
    setActiveId(id);
    if (activeId === null) {
      getJobById(
        id,
        setAd,
        setTitle,
        setDescription,
        setInstruction,
        setHtmlCode
      );
      setPreviewVisible(true);
    } else if (activeId !== id) {
      getJobById(
        id,
        setAd,
        setTitle,
        setDescription,
        setInstruction,
        setHtmlCode
      );
      setPreviewVisible(true);
    } else {
      setPreviewVisible(false);
      setActiveId(null);
    }
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
    <S_Main>
      <S_HeadingBox_MyJobs>
        <S_Title_MyJobs>My Jobs</S_Title_MyJobs>
      </S_HeadingBox_MyJobs>
      <S_WindowSplit_MyJobs>
        <S_JobList_Box_MyJobs>
          <S_JobList_Heading_MyJobs>Job titles</S_JobList_Heading_MyJobs>
          {jobList.map((job) => (
            <S_JobList_Jobs_MyJobs
              key={job.id}
              onClick={() => handlePreview(job.id)}
              $firstChild="false"
              $active={activeId === job.id ? "true" : "false"}
            >
              {job.title.length > 20
                ? job.title.slice(0, 20) + "..."
                : job.title}
            </S_JobList_Jobs_MyJobs>
          ))}

          <S_Button_AddJob_MyJobs
            $firstChild="true"
            onClick={() => handleAddJob()}
          >
            ➕ Add New Job
          </S_Button_AddJob_MyJobs>
        </S_JobList_Box_MyJobs>
        <S_Preview_MyJobs>
          {previewVisible && (
            <Preview
              id={ad.id}
              handleCRUDSuccess={handleCRUDSuccess}
              handlePreview={handlePreview}
              setPreviewVisible={setPreviewVisible}
              handleActiveField={handleActiveField}
              ad={ad}
              htmlCode={htmlCode}
              setHtmlCode={setHtmlCode}
              title={title}
              setTitle={setTitle}
              description={description}
              setDescription={setDescription}
              instruction={instruction}
              setInstruction={setInstruction}
              handleUpdate={handleUpdate}
              handleGenerate={handleGenerate}
              handleDelete={handleDelete}
            />
          )}
        </S_Preview_MyJobs>
      </S_WindowSplit_MyJobs>
    </S_Main>
  );
}
