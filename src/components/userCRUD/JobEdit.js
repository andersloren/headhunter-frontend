// Libraries, functions, etc...
import { useEffect, useState } from "react";
import { deleteJob } from "./jobFunctions/deleteJob.js";
import { updateJob } from "./jobFunctions/updateJob.js";
import { getJobById } from "./jobFunctions/getJobById.js";
import { generateJobAd } from "./jobFunctions/generateJobAd.js";

// Styled Components
import { S_Main } from "../styledGlobal.js";
import {
  S_PreviewBox_Preview,
  S_TextArea_Preview,
  S_Buttons_Edit_Preview,
  S_FunctionalityButton_Box_Preview,
  S_FunctionalityButton_Preview,
  S_Tooltip_FunctionalityButton_Preview,
  S_JobEdit_And_Ad_Box,
  S_TopButtons_Box_Preview,
  S_Animation,
} from "./styledUser.js";

export default function JobEdit({
  handleJobCRUDSuccess,
  jobId,
  setIsChange,
  setJobVisible,
  handleAdCRUDSuccess,
}) {
  // States related to functionality
  const [job, setJob] = useState({}); // Is this needed??
  const [active, setActive] = useState(1);
  const [activeButton, setActiveButton] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  // States related to the job
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [instruction, setInstruction] = useState("");

  const documentType = "html";

  useEffect(() => {
    getJobById(jobId, setJob, setTitle, setDescription, setInstruction);
    setActive(1);
    console.log("JobEdit, jobId", jobId);
  }, [jobId]);

  function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this job?")) {
      deleteJob(id, handleJobCRUDSuccess);
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
      setIsGenerating(true);
      generateJobAd(documentType, id, handleAdCRUDSuccess, setIsGenerating);
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
      handleJobCRUDSuccess,
      title,
      description,
      instruction,
      handleIsChange
    );
  }

  function handleActiveButton(buttonId) {
    setActiveButton(buttonId);
  }

  return (
    <S_Main>
      <S_JobEdit_And_Ad_Box>
        <S_TopButtons_Box_Preview>
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
        </S_TopButtons_Box_Preview>
        <S_PreviewBox_Preview>
          <S_TextArea_Preview
            value={
              active < 3 ? (active < 2 ? title : description) : instruction
            }
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
            onMouseOver={() =>
              isGenerating ? handleActiveButton("") : handleActiveButton("1")
            }
            onMouseLeave={() => handleActiveButton("")}
            $blur={isGenerating === true ? "true" : "false"}
          >
            💾
          </S_FunctionalityButton_Preview>
          <S_FunctionalityButton_Preview
            onClick={() => handleGenerate(documentType, jobId)}
            onMouseOver={() =>
              isGenerating ? handleActiveButton("") : handleActiveButton("2")
            }
            onMouseLeave={() => handleActiveButton("")}
            $blur={isGenerating === true ? "true" : "false"}
          >
            ⚡
          </S_FunctionalityButton_Preview>
          <S_FunctionalityButton_Preview
            onClick={() => handleDelete(jobId)}
            onMouseOver={() =>
              isGenerating ? handleActiveButton("") : handleActiveButton("3")
            }
            onMouseLeave={() => handleActiveButton("")}
            $blur={isGenerating === true ? "true" : "false"}
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
        {isGenerating && (
          <S_Animation blur={isGenerating === true ? "true" : "false"}>
            🤖
          </S_Animation>
        )}
      </S_JobEdit_And_Ad_Box>
    </S_Main>
  );
}
