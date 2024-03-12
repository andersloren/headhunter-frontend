// Libraries, functions, etc.
import { useEffect, useState } from "react";
import { addJob } from "./jobFunctions/addJob.js";
import { getAllMyJobs } from "./jobFunctions/getAllMyJobs.js";

// Custom components
import JobEdit from "./JobEdit.js";
import Ad from "./Ad.js";

// CSS
import { S_Main, S_HeadingBox, S_Title } from "../styledGlobal.js";
import {
  S_Preview_MyJobs,
  S_Button_AddJob_MyJobs,
  S_JobList_Box_MyJobs,
  S_JobList_Heading_MyJobs,
  S_JobList_Jobs_MyJobs,
  S_WindowSplit,
} from "./styledUser.js";

export default function MyJobs() {
  const [jobList, setJobList] = useState([]);
  const [jobId, setJobId] = useState(null);
  const [refreshTable, setRefreshTable] = useState(false);
  const [jobVisible, setJobVisible] = useState(false);
  const [isChange, setIsChange] = useState(false);
  const [refreshAdTabs, setRefreshAdTabs] = useState(false);
  const [adsExist, setAdsExist] = useState(false);

  useEffect(() => {
    getAllMyJobs(setJobList);
  }, [refreshTable]);

  useEffect(() => {
    getAllMyJobs(setJobList);
  }, []);

  function handleJobCRUDSuccess() {
    setRefreshTable((refresh) => !refresh);
  }

  function handleAddJob() {
    addJob(handleJobCRUDSuccess);
  }

  function handleUnsavedChanges(id) {
    if (window.confirm("Click OK to leave without saving?")) {
      setIsChange(false);
    }
  }

  function handlePreview(id) {
    if (jobId === null) {
      setJobId(id);
      setJobVisible(true);
    } else if (jobId !== id) {
      setJobId(id);
      setJobVisible(true);
    } else {
      setJobVisible(true);
    }
  }

  function handleAdCRUDSuccess() {
    setRefreshAdTabs((refresh) => !refresh);
  }

  return (
    <S_Main>
      <S_HeadingBox>
        <S_Title>My Jobs</S_Title>
      </S_HeadingBox>
      <S_WindowSplit>
        <S_JobList_Box_MyJobs>
          <S_JobList_Heading_MyJobs>Job titles</S_JobList_Heading_MyJobs>
          {jobList.map((job) => (
            <S_JobList_Jobs_MyJobs
              key={job.id}
              onClick={() => {
                // Solve this by looking over the handling of unsaved changes
                isChange ? handleUnsavedChanges(job.id) : handlePreview(job.id);
                setAdsExist(job.numberOfAds > 0);
              }}
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
          {jobVisible && (
            <>
              <JobEdit
                handleJobCRUDSuccess={handleJobCRUDSuccess}
                jobId={jobId}
                setIsChange={setIsChange}
                setJobVisible={setJobVisible}
                setRefreshAdTabs={setRefreshAdTabs}
                handleAdCRUDSuccess={handleAdCRUDSuccess}
              />
              {adsExist && (
                <Ad
                  jobId={jobId}
                  refreshAdTabs={refreshAdTabs}
                  handleAdCRUDSuccess={handleAdCRUDSuccess}
                />
              )}
            </>
          )}
        </S_Preview_MyJobs>
      </S_WindowSplit>
    </S_Main>
  );
}
