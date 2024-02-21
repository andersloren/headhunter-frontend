// Libraries, functions, etc...
import { useState } from "react";

// Styled Components
import { S_Main } from "../utils/styledMain.js";
import {
  S_Iframe_Preview,
  S_PreviewBox_Preview,
  S_TextArea_Preview,
  S_Buttons_Edit_Preview,
  S_Button_Squared,
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

  const blob = new Blob([htmlCode], { type: "text/html" });
  const url = URL.createObjectURL(blob);

  return (
    <S_Main>
      <S_Buttons_Edit_Preview
        $firstChild={"true"}
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
      <S_Button_Squared
        $firstChild={"true"}
        onClick={() =>
          handleUpdate(ad.id, title, description, instruction, htmlCode)
        }
      >
        💾
      </S_Button_Squared>
      <S_Button_Squared
        $firstChild={"false"}
        onClick={() => handleGenerate(ad.id, setPreviewVisible)}
      >
        ⚡
      </S_Button_Squared>
      <S_Button_Squared
        $firstChild={"false"}
        onClick={() => handleDelete(ad.id)}
      >
        ❌
      </S_Button_Squared>
    </S_Main>
  );
}
