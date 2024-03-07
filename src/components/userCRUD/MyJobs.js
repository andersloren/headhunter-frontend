// Libraries, functions, etc.
import { useEffect, useState } from "react";
import { addJob } from "./jobFunctions/addJob.js";
import { getAllMyJobs } from "./jobFunctions/getAllMyJobs.js";

// Custom components
import JobEdit from "./JobEdit.js";

// CSS
import "./userCrud.css";
import "./table.css";
import {
  S_WindowSplit_MyJobs,
  S_Title_MyJobs,
  S_HeadingBox_MyJobs,
  S_Preview_MyJobs,
  S_Button_AddJob_MyJobs,
  S_JobList_Box_MyJobs,
  S_JobList_Heading_MyJobs,
  S_JobList_Jobs_MyJobs,
} from "./styledComponents.js";
import { S_Main } from "../utils/styledMain.js";

export default function MyJobs() {
  const [jobList, setJobList] = useState([]);
  const [jobId, setJobId] = useState(null);
  const [refreshTable, setRefreshTable] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    getAllMyJobs(setJobList);
  }, [refreshTable]);

  useEffect(() => {
    getAllMyJobs(setJobList);
  }, []);

  function handleCRUDSuccess() {
    setRefreshTable((refresh) => !refresh);
  }

  function handleAddJob() {
    addJob(handleCRUDSuccess);
  }

  function handleUnsavedChanges(id) {
    if (window.confirm("Click OK to leave without saving?")) {
      setIsChange(false);
      // Do we want to be automatically transfered to the job we've just clicked???
    }
  }

  function handlePreview(id) {
    if (jobId === null) {
      setJobId(id);
      // Remove getJobById once everything is working in the Job Component
      // getJobById(id, setJob, setTitle, setDescription, setInstruction);
      setPreviewVisible(true);
    } else if (jobId !== id) {
      setJobId(id);
      // getJobById(id, setJob, setTitle, setDescription, setInstruction);
    } else {
      setPreviewVisible(true);
      // getJobById(id, setJob, setTitle, setDescription, setInstruction);
    }
  }

  console.log("MyJobs, JobId:", jobId);

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
              onClick={() => {
                // Solve this by looking over the handling of unsaved changes
                isChange ? handleUnsavedChanges(job.id) : handlePreview(job.id);
              }}
              $firstChild="false"
              $active={jobId === job.id ? "true" : "false"}
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
            <JobEdit
              handleCRUDSuccess={handleCRUDSuccess}
              jobId={jobId}
              setIsChange={setIsChange}
              setPreviewVisible={setPreviewVisible}
            />
          )}
        </S_Preview_MyJobs>
      </S_WindowSplit_MyJobs>
    </S_Main>
  );
}
