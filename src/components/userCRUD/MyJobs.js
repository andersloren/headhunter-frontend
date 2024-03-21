// Libraries, functions, etc.
import { useEffect, useState } from "react";
import { addJob } from "./jobFunctions/addJob.js";
import { getAllMyJobs } from "./jobFunctions/getAllMyJobs.js";

// Custom components
import JobEdit from "./JobEdit.js";
import Ad from "./Ad.js";

// CSS
import { S_Main } from "../styledGlobal.js";
import { S_Header } from "./styledComponents/styledUserGlobal.js";
import {
  S_Preview,
  S_Button_AddJob,
  S_JobList_Box,
  S_JobList,
} from "./styledComponents/styledMyJobs.js";

/**
 *
 *
 * States:
 * - 'jobList': An array of all the jobs that belong to the user.
 * - 'jobId': The identifier for the job currently being selected in jobList.
 * - 'refreshTable': When a change is made to the jobList, this function triggers the fetching of an updated list of jobs from the backend.
 * - 'jobVisible': If a job is being selected, it shows in the child component that deals with job UI.
 * - 'isChange': If a different job is being selected while there are unsaved changes in the text area of the child component that handles the job UI, a window confirm alert sets off that asks the user if it wants to proceed without saving.
 * - 'refreshAdTabs' - When a new Job object is being clicked, the ads related to that ad should be shown to the user in child component that handles the ad UI.
 * - 'adsExist' - Sets to true if the job has a number of ad objects being more than 0.
 */

export default function MyJobs() {
  const [jobList, setJobList] = useState([]);
  const [jobId, setJobId] = useState(null);
  const [refreshTable, setRefreshTable] = useState(false);
  const [jobVisible, setJobVisible] = useState(false);
  const [isChange, setIsChange] = useState(false);
  const [refreshAdTabs, setRefreshAdTabs] = useState(false);
  const [adsExist, setAdsExist] = useState(false);

  /**
   * If a job is being successfully added, updated, or deleted, refreshTable triggers the fetching of an updated array of jobs.
   */

  useEffect(() => {
    getAllMyJobs(setJobList);
  }, [refreshTable]);

  /**
   * When the component mounts, all the jobs belonging to the user is being fetched from the backend.
   */

  useEffect(() => {
    getAllMyJobs(setJobList);
  }, []);

  // TODO - Skip the handle-part and just put addJob() where the function should be invoked?
  function handleAddJob() {
    addJob(handleJobCRUDSuccess);
  }

  // TODO - Remove 'id', also check where this function is being invoked
  function handleUnsavedChanges(id) {
    if (window.confirm("Click OK to leave without saving?")) {
      setIsChange(false);
    }
  }

  /**
   * handlePreview compares the clicked id with the selected id. If it's not the same, the newly clicked job will be the new selected and a new job will show in the job UI. If it is the same, nothing happens.
   *
   * @param {number} id - The id of the job that was just clicked. It's not necessarily (but can be) the same as jobId, which is the job being selected.
   */

  // TODO - Look over the namings here. Is it still Preview we want to call it?
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

  /**
   * When a job is successfully added, updated, or deleted, refreshTable toggles (which then triggers an update of jobList)
   */

  function handleJobCRUDSuccess() {
    setRefreshTable((refresh) => !refresh);
  }

  /**
   * When a new job is selected, the ads related to that job needs to be shown in the ad UI.
   */

  function handleAdCRUDSuccess() {
    setRefreshAdTabs((refresh) => !refresh);
  }

  return (
    <>
      <S_Main>
        <S_JobList_Box>
          <div>username</div>
          <div>Logout</div>

          {
            // Joblist
          }

          <S_Header>Jobs</S_Header>
          {jobList.map((job) => (
            <S_JobList
              key={job.id}
              onClick={() => {
                isChange ? handleUnsavedChanges(job.id) : handlePreview(job.id);
                setAdsExist(job.numberOfAds > 0);
              }}
              /**
               * The selected job is highlighted in the list of jobs in the job UI.
               */
              $active={jobId === job.id ? "true" : "false"}
            >
              {/**
               * Only up to 20 characters of the job title is shown in the list of jobs in the job UI.
               */}
              {job.title.length > 20
                ? job.title.slice(0, 20) + "..."
                : job.title}
            </S_JobList>
          ))}

          {
            // Add New Job button
          }

          <S_Button_AddJob $firstChild="true" onClick={() => handleAddJob()}>
            ➕ Add New Job
          </S_Button_AddJob>
        </S_JobList_Box>
        {
          // Job and Ad components
        }
        <>
          {/* TODO - See if it's possible to remove S_Preview */}
          <S_Preview>
            {/**
             * Only if a job is selected will the job UI show.
             */}
            {jobVisible && (
              <>
                <JobEdit
                  key={jobId}
                  handleJobCRUDSuccess={handleJobCRUDSuccess}
                  jobId={jobId}
                  setIsChange={setIsChange}
                  setJobVisible={setJobVisible}
                  setRefreshAdTabs={setRefreshAdTabs}
                  handleAdCRUDSuccess={handleAdCRUDSuccess}
                />
                {/**
                 * Only if the selected job has one or more ads will the ad UI show.
                 */}
                {adsExist && (
                  <Ad
                    jobId={jobId}
                    refreshAdTabs={refreshAdTabs}
                    handleAdCRUDSuccess={handleAdCRUDSuccess}
                  />
                )}
              </>
            )}
          </S_Preview>
        </>
      </S_Main>
    </>
  );
}
