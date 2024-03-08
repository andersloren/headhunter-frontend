// Libraries, functions, etc...
import { useEffect, useState } from "react";
import { deleteJob } from "./jobFunctions/deleteJob.js";
import { updateJob } from "./jobFunctions/updateJob.js";
import { getJobById } from "./jobFunctions/getJobById.js";
import { generateJobAd } from "./jobFunctions/generateJobAd.js";
import { getAllMyJobs } from "./jobFunctions/getAllMyJobs.js";
import { extractEmailFromToken } from "../security/token/extractEmailFromToken.js";

// Styled Components
import { S_Main } from "../utils/styledMain.js";
import {
  S_PreviewBox_Preview,
  S_TextArea_Preview,
  S_Buttons_Edit_Preview,
  S_FunctionalityButton_Box_Preview,
  S_FunctionalityButton_Preview,
  S_Tooltip_FunctionalityButton_Preview,
} from "./styledComponents.js";

export default function JobEdit({
  handleCRUDSuccess,
  jobId,
  setIsChange,
  setJobVisible,
}) {
  const [job, setJob] = useState({});
  const [active, setActive] = useState(1);
  const [activeButton, setActiveButton] = useState("");

  // States that have been moved here from MyJobs
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [instruction, setInstruction] = useState("");
  // const [adList, setAdList] = useState([]);
  // const [adId, setAdIt] = useState("");
  // Above are states that has been moved here from MyJobs

  const documentType = "html";

  useEffect(() => {
    getJobById(jobId, setJob, setTitle, setDescription, setInstruction);
    setActive(1);
    console.log("JobEdit, jobId", jobId);
  }, [jobId]);

  // Functions that have been moved here from MyJobs

  function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this job?")) {
      deleteJob(id, handleCRUDSuccess);
      setJobVisible(false);
    } else {
      console.log("User cancelled delete");
    }
  }

  function handleGenerate(documentType, id) {
    if (
      window.confirm(
        "Are you sure you want to generate a new ad? Remember, the generation will take a short moment and consume credits."
      )
    ) {
      generateJobAd(documentType, id, handleCRUDSuccess);
    } else {
      console.log("User cancelled generation");
    }
  }

  function handleIsChange() {
    setIsChange(false);
  }

  function handleUpdate(title, description, instruction) {
    updateJob(
      jobId,
      handleCRUDSuccess,
      title,
      description,
      instruction,
      handleIsChange
    );
  }
  // Above are functions that have been moved here from MyJobs

  function handleActiveButton(buttonId) {
    setActiveButton(buttonId);
  }

  // Button for saving Ad
  // function handleSaveAd(jobId, htmlCode) {
  //   console.log("Preview, handleSaveAd", jobId);
  //   saveAd(jobId, htmlCode);
  // }

  // Functionality for setting which ad is to be active
  // function handleActiveAd(ad.id) {
  //   setActiveAd
  // }

  return (
    <S_Main>
      <S_Buttons_Edit_Preview
        onClick={() => setActive(1)}
        $active={active === 1 ? "true" : "false"}
      >
        Title
      </S_Buttons_Edit_Preview>
      <S_Buttons_Edit_Preview
        onClick={() => setActive(2)}
        $active={active === 2 ? "true" : "false"}
      >
        Description
      </S_Buttons_Edit_Preview>
      <S_Buttons_Edit_Preview
        onClick={() => setActive(3)}
        $active={active === 3 ? "true" : "false"}
      >
        Instruction
      </S_Buttons_Edit_Preview>
      <S_PreviewBox_Preview>
        <S_TextArea_Preview
          value={active < 3 ? (active < 2 ? title : description) : instruction}
          onChange={(e) => {
            active < 3
              ? active < 2
                ? setTitle(e.target.value)
                : setDescription(e.target.value)
              : setInstruction(e.target.value);
            setIsChange(true);
          }}
        ></S_TextArea_Preview>
      </S_PreviewBox_Preview>
      <S_FunctionalityButton_Box_Preview>
        <S_FunctionalityButton_Preview
          onClick={() => {
            handleUpdate(title, description, instruction);
          }}
          onMouseOver={() => handleActiveButton("1")}
          onMouseLeave={() => handleActiveButton("")}
        >
          💾
        </S_FunctionalityButton_Preview>
        <S_FunctionalityButton_Preview
          onClick={() => handleGenerate(documentType, jobId)}
          onMouseOver={() => handleActiveButton("2")}
          onMouseLeave={() => handleActiveButton("")}
        >
          ⚡
        </S_FunctionalityButton_Preview>
        <S_FunctionalityButton_Preview
          onClick={() => handleDelete(jobId)}
          onMouseOver={() => handleActiveButton("3")}
          onMouseLeave={() => handleActiveButton("")}
        >
          ❌
        </S_FunctionalityButton_Preview>
        {activeButton && (
          <S_Tooltip_FunctionalityButton_Preview $activeButton={activeButton}>
            {activeButton !== "3"
              ? activeButton !== "2"
                ? "Save title, description and instruction"
                : "Generate a new ad"
              : "Delete job"}
          </S_Tooltip_FunctionalityButton_Preview>
        )}
      </S_FunctionalityButton_Box_Preview>
    </S_Main>
  );
}
