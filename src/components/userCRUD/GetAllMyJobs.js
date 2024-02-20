// Libraries, functions, etc.
import axios from "axios";
import { useEffect, useState } from "react";
import { deleteJob } from "./jobFunctions/deleteJob";
import { generateJobAd } from "./jobFunctions/generateJobAd";
import { updateJob } from "./jobFunctions/updateJob";
import { extractEmailFromToken } from "../security/token/extractEmailFromToken";
import { getJobById } from "./jobFunctions/getJobById";

// Custom components
import AddJob from "./AddJob";
import Preview from "./Preview";

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
} from "./styledComponents.js";
import { S_Main } from "../utils/styledMain.js";

export default function GetAllMyJobs() {
  const [activeId, setActiveId] = useState(null);
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
    if (id !== activeId) {
      getJobById(id, setAd, setDescription, setInstruction, setHtmlCode);
      setActiveId(id);
    } else {
      setPreviewVisible((vis) => !vis);
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
        {/* <table className="table">*/}
        <S_Table_MyJobs>
          <thead>
            <tr>
              <S_Table_Headers_MyJobs $firstChild="true">
                #
              </S_Table_Headers_MyJobs>
              <S_Table_Headers_MyJobs $firstChild="false">
                Title
              </S_Table_Headers_MyJobs>
              {/* <S_Table_Headers_MyJobs $firstChild="false">
                Functionality
              </S_Table_Headers_MyJobs> */}
            </tr>
          </thead>
          <tbody>
            {jobList.map((job) => (
              <S_Table_Rows_MyJobs key={job.id} $title="true">
                <S_Table_Data_MyJobs>{job.id}</S_Table_Data_MyJobs>
                <S_Table_Data_MyJobs onClick={() => handlePreview(job.id)}>
                  {job.title.length > 20
                    ? job.title.slice(0, 20) + "..."
                    : job.title}
                </S_Table_Data_MyJobs>
                {/* <td>
                  <S_Button_Squared
                    key={["view", job.id]}
                    id={job.id}
                    onClick={() => handlePreview(job.id)}
                  >
                    👁️
                  </S_Button_Squared>
                  <S_Button_Squared
                    key={["delete", job.id]}
                    id={job.id}
                    onClick={() => handleDelete(job.id)}
                  >
                    ❌
                  </S_Button_Squared>
                  <S_Button_Squared
                    key={["generate", job.id]}
                    id={job.id}
                    onClick={() => handleGenerate(job.id)}
                  >
                    🔌
                  </S_Button_Squared>
                </td> */}
              </S_Table_Rows_MyJobs>
            ))}
          </tbody>
        </S_Table_MyJobs>
        {/* </table> */}
        <S_Preview_MyJobs>
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
          {addVisible && <AddJob onAddSuccess={handleCRUDSuccess} />}
        </S_Preview_MyJobs>
      </S_WindowSplit_MyJobs>
    </S_Main>
  );
}
