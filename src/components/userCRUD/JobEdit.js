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
  S_FunctionalityButton_Box_Preview,
  S_FunctionalityButton_Preview,
  S_Tooltip_FunctionalityButton_Preview,
  S_JobEdit_And_Ad_Box,
  S_Animation_Text,
  S_Animation_Rotate,
  S_Header,
  S_Instruction_Input,
  S_Instruction_DecisionButton,
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
  const [documentType, setDocumentType] = useState("html");

  // States related to instruction
  const [activeFormat, setActiveFormat] = useState(1);

  useEffect(() => {
    getJobById(jobId, setJob, setTitle, setDescription, setInstruction);
    setActive(1);
  }, [jobId]);
  useEffect(() => {
    const documentTypeArr = ["html", "pdf", "docx"];
    setDocumentType(documentTypeArr[activeFormat - 1]);
  }, [activeFormat, setDocumentType]);

  useEffect(() => {
    setInstruction(
      "Skapa en jobbannons i " +
        documentType +
        "-format. " +
        defaultInstructions
    );
    setDescription(defaultDescription);
  }, [documentType]);

  function handleGenerate() {
    if (
      window.confirm(
        "Are you sure you want to generate a new ad? Remember, the generation will take a short moment and consume credits."
      )
    ) {
      setIsGenerating(true);
      generateJobAd(documentType, jobId, handleAdCRUDSuccess, setIsGenerating);
    } else {
      console.log("User cancelled generation");
    }
  }

  function handleUpdate() {
    updateJob(
      jobId,
      handleJobCRUDSuccess,
      title,
      description,
      instruction,
      handleIsChange
    );
  }

  function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this job?")) {
      deleteJob(id, handleJobCRUDSuccess);
      setJobVisible(false);
    } else {
      console.log("User cancelled delete");
    }
  }

  function handleIsChange() {
    setIsChange(false);
  }

  function handleActiveButton(buttonId) {
    setActiveButton(buttonId);
  }

  return (
    <S_Main>
      <S_JobEdit_And_Ad_Box>
        {
          // Title input field
        }

        <S_Header>Title</S_Header>
        <S_Instruction_Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></S_Instruction_Input>

        {
          // Format decision buttons
        }

        <S_Header>Format</S_Header>
        <S_Instruction_DecisionButton
          onClick={() => setActiveFormat("1")}
          $active={activeFormat === "1" ? "true" : "false"}
        >
          HTML
        </S_Instruction_DecisionButton>
        <S_Instruction_DecisionButton
          onClick={() => setActiveFormat("2")}
          $active={activeFormat === "2" ? "true" : "false"}
        >
          PDF
        </S_Instruction_DecisionButton>
        <S_Instruction_DecisionButton
          onClick={() => setActiveFormat("3")}
          $active={activeFormat === "3" ? "true" : "false"}
        >
          DOCX
        </S_Instruction_DecisionButton>

        {
          // Description text area
        }

        <S_Header>Description</S_Header>
        <S_PreviewBox_Preview>
          <S_TextArea_Preview
            value={active < 2 ? description : instruction}
            onChange={(e) => {
              active < 2
                ? setDescription(e.target.value)
                : setInstruction(e.target.value);
              setIsChange(true);
            }}
          ></S_TextArea_Preview>
        </S_PreviewBox_Preview>

        {
          // Functionality buttons
        }

        <S_FunctionalityButton_Box_Preview>
          {
            // Save Ad button
          }
          <S_FunctionalityButton_Preview
            onClick={() => {
              handleUpdate();
            }}
            onMouseOver={() =>
              isGenerating ? handleActiveButton("") : handleActiveButton("1")
            }
            onMouseLeave={() => handleActiveButton("")}
            $blur={isGenerating === true ? "true" : "false"}
          >
            💾
          </S_FunctionalityButton_Preview>
          {
            // Generate Ad button
          }
          <S_FunctionalityButton_Preview
            onClick={() => {
              handleUpdate();
              handleGenerate(jobId);
            }}
            onMouseOver={() =>
              isGenerating ? handleActiveButton("") : handleActiveButton("2")
            }
            onMouseLeave={() => handleActiveButton("")}
            $blur={isGenerating === true ? "true" : "false"}
          >
            ⚡
          </S_FunctionalityButton_Preview>
          {
            // Delete Ad button
          }
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

          {
            // Tooltip
          }

          {activeButton && (
            <S_Tooltip_FunctionalityButton_Preview $activeButton={activeButton}>
              {activeButton !== "3"
                ? activeButton !== "2"
                  ? "Save description"
                  : "Save description and Generate a new ad"
                : "Delete job"}
            </S_Tooltip_FunctionalityButton_Preview>
          )}
        </S_FunctionalityButton_Box_Preview>

        {
          // Generate loader animation
        }

        {isGenerating && (
          <>
            <S_Animation_Rotate
              $blur={isGenerating === true ? "true" : "false"}
            >
              🤖
            </S_Animation_Rotate>
            <S_Animation_Text>Generating ad...</S_Animation_Text>
          </>
        )}

        {
          // Instructions (for developing purposese)
        }

        <S_Header>Instructions</S_Header>
        <S_PreviewBox_Preview>
          <S_TextArea_Preview
            value={active < 2 ? description : instruction}
            onChange={(e) => {
              active < 2
                ? setDescription(e.target.value)
                : setInstruction(e.target.value);
              setIsChange(true);
            }}
          ></S_TextArea_Preview>
        </S_PreviewBox_Preview>
      </S_JobEdit_And_Ad_Box>
    </S_Main>
  );
}

const defaultInstructions =
  "För att omarbeta en arbetsbeskrivning till en jobbannons, börja med att läsa igenom arbetsbeskrivningen noggrant för att förstå de huvudsakliga arbetsuppgifterna, nödvändiga kompetenser och kvalifikationer. Sedan, översätt denna information till en mer engagerande och tilltalande form som lockar potentiella kandidater. Det är viktigt att framhäva företagets kultur och de unika fördelarna med att arbeta där. Börja annonsen med en kort introduktion till företaget, följt av en översikt av jobbrollen. Använd en positiv och inkluderande ton, och undvik jargong. Gör klart vilka huvudsakliga ansvarsområden rollen innefattar och vilka färdigheter och erfarenheter som är önskvärda. Inkludera även information om eventuella förmåner eller möjligheter till personlig och professionell utveckling. Avsluta med hur man ansöker till tjänsten, inklusive viktiga datum och kontaktinformation. Kom ihåg att vara tydlig och koncis för att hålla potentiella kandidaters uppmärksamhet. En välformulerad jobbannons ska inte bara informera utan också inspirera och locka rätt talanger till att söka.";

const defaultDescription =
  "Företaget Sprinta utvecklare en applikation för AI-genererade jobbannonser. Frontend är skriven i React, och tillhörande libraries är React Router, Styled Components, Bootstrap och DOMPurify. Backend är skriven i Java och Spring Boot, Spring Security samt kommunikation med ett AI API används. Databasen sköts av MySQL. Applikationen styrs genom molntjänsten Azure. GIT och GitHub används som versionshanterare. Alla inblandade behöver kontinuerligt vara beredda på att sätta sig in i nya libraries och frameworks. Målet är att applikationen ska sjösättas inom 1 år. Applikationen växer snabbt och de nuvarande två utvecklarna får allt svårare att hinna med allt som behöver göras. Ytterligare en utvecklare behövs nu.";
