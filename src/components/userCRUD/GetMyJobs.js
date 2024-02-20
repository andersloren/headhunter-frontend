// Libraries, functions, etc.
import axios from "axios";
import { useEffect, useState } from "react";
import { deleteJob } from "./jobFunctions/deleteJob.js";
import { generateJobAd } from "./jobFunctions/generateJobAd.js";
import { updateJob } from "./jobFunctions/updateJob.js";
import { extractEmailFromToken } from "../security/token/extractEmailFromToken.js";
import { getJobById } from "./jobFunctions/getJobById.js";
import { addJob } from "./jobFunctions/addJob.js";

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
  S_Table_MyJobs,
  S_Table_Headers_MyJobs,
  S_Table_Data_MyJobs,
  S_Table_Rows_MyJobs,
  S_Table_Box_MyJobs,
  S_Button_AddJob_MyJobs,
} from "./styledComponents.js";
import { S_Main } from "../utils/styledMain.js";

export default function GetMyJobs() {
  const [activeId, setActiveId] = useState(null);
  const [title, setTitle] = useState("");
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

  function handleAddJob() {
    addJob(handleCRUDSuccess); // rename this and the file holding this function
  }

  function handleDelete(id) {
    deleteJob(id, handleCRUDSuccess);
  }

  function handleUpdate(id, description, instruction, htmlCode) {
    updateJob(id, handleCRUDSuccess, title, description, instruction, htmlCode);
  }

  console.log("GetMyJobs:", activeId);

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
    <S_Main>
      <S_HeadingBox_MyJobs>
        <S_Title_MyJobs>My Jobs</S_Title_MyJobs>
      </S_HeadingBox_MyJobs>
      <S_WindowSplit_MyJobs>
        <S_Table_Box_MyJobs>
          <S_Table_MyJobs>
            <thead>
              <tr>
                <S_Table_Headers_MyJobs $firstChild="true">
                  #
                </S_Table_Headers_MyJobs>
                <S_Table_Headers_MyJobs $firstChild="false">
                  Title
                </S_Table_Headers_MyJobs>
              </tr>
            </thead>
            <tbody>
              {jobList.map((job) => (
                <S_Table_Rows_MyJobs key={job.id} $title="true">
                  <S_Table_Data_MyJobs $firstChild="true">
                    {job.id}
                  </S_Table_Data_MyJobs>
                  <S_Table_Data_MyJobs
                    onClick={() => handlePreview(job.id)}
                    $firstChild="false"
                  >
                    {job.title.length > 20
                      ? job.title.slice(0, 20) + "..."
                      : job.title}
                  </S_Table_Data_MyJobs>
                </S_Table_Rows_MyJobs>
              ))}
            </tbody>
          </S_Table_MyJobs>
          <S_Button_AddJob_MyJobs
            $firstChild="true"
            onClick={() => handleAddJob()}
          >
            ➕ Add New Job
          </S_Button_AddJob_MyJobs>
        </S_Table_Box_MyJobs>
        {/* </table> */}
        <S_Preview_MyJobs>
          {previewVisible && (
            <Preview
              title={title}
              description={description}
              instruction={instruction}
              htmlCode={htmlCode}
              setTitle={setTitle}
              setDescription={setDescription}
              setInstruction={setInstruction}
              setHtmlCode={setHtmlCode}
              handleUpdate={handleUpdate}
              handleAddVisible={handleAddVisible}
              handleActiveField={handleActiveField}
              ad={ad}
            />
          )}
          {/* {addVisible && <AddJob onAddSuccess={handleCRUDSuccess} />} */}
        </S_Preview_MyJobs>
      </S_WindowSplit_MyJobs>
    </S_Main>
  );
}
