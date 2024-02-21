// Libraries, functions, etc...
import { useState } from "react";

// Styled Components
import { S_Main } from "../utils/styledMain.js";
import {
  S_Iframe_Preview,
  S_PreviewBox_Preview,
  S_TextArea_Preview,
  S_Buttons_Edit_Preview,
  S_FunctionalityButton_Box_Preview,
  S_FunctionalityButton_Preview,
  S_Tooltip_FunctionalityButton_Preview,
} from "./styledComponents.js";

export default function Preview({
  ad,
  setPreviewVisible,
  htmlCode,
  title,
  setTitle,
  description,
  setDescription,
  instruction,
  setInstruction,
  setHtmlCode,
  handleUpdate,
  handleGenerate,
  handleDelete,
}) {
  const [active, setActive] = useState(4);
  const [activeButton, setActiveButton] = useState("");

  const blob = new Blob([htmlCode], { type: "text/html" });
  const url = URL.createObjectURL(blob);

  function handleActiveButton(buttonId) {
    setActiveButton(buttonId);
  }

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
      <S_Buttons_Edit_Preview
        onClick={() => setActive(4)}
        $active={active === 4 ? "true" : "false"}
      >
        HTML-code
      </S_Buttons_Edit_Preview>
      <S_PreviewBox_Preview>
        <S_TextArea_Preview
          value={
            active < 4
              ? active < 3
                ? active < 2
                  ? title
                  : description
                : instruction
              : htmlCode
          }
          onChange={(e) => {
            active < 4
              ? active < 3
                ? active < 2
                  ? setTitle(e.target.value)
                  : setDescription(e.target.value)
                : setInstruction(e.target.value)
              : setHtmlCode(e.target.value);
          }}
        ></S_TextArea_Preview>
        <S_Iframe_Preview src={url} title={"Ad Content"}></S_Iframe_Preview>
      </S_PreviewBox_Preview>
      <S_FunctionalityButton_Box_Preview>
        <S_FunctionalityButton_Preview
          onClick={() =>
            handleUpdate(ad.id, title, description, instruction, htmlCode)
          }
          onMouseOver={() => handleActiveButton("1")}
          onMouseLeave={() => handleActiveButton("")}
        >
          💾
        </S_FunctionalityButton_Preview>
        <S_FunctionalityButton_Preview
          onClick={() => handleGenerate(ad.id, setPreviewVisible)}
          onMouseOver={() => handleActiveButton("2")}
          onMouseLeave={() => handleActiveButton("")}
        >
          ⚡
        </S_FunctionalityButton_Preview>
        <S_FunctionalityButton_Preview
          onClick={() => handleDelete(ad.id)}
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
