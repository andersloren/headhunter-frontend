// Libraries, functions, etc...
import { useState } from "react";
import Button from "../utils/buttons/Button";

// Styled Components
import { S_Main } from "../utils/styledMain.js";
import {
  S_Iframe_Preview,
  S_PreviewBox_Preview,
  S_TextArea_Preview,
} from "./styledComponents.js";

export default function Preview({
  title,
  description,
  instruction,
  htmlCode,
  setHtmlCode,
  setDescription,
  setInstruction,
  setTitle,
  handleUpdate,
  ad,
}) {
  const [active, setActive] = useState(3);

  const blob = new Blob([htmlCode], { type: "text/html" });
  const url = URL.createObjectURL(blob);

  return (
    <S_Main>
      <button
        className={`preview-button preview-button-leftmost ${
          active === 1 ? "preview-button-active" : ""
        }`}
        onClick={() => setActive(1)}
      >
        Title
      </button>
      <button
        className={`preview-button ${
          active === 2 ? "preview-button-active" : ""
        }`}
        onClick={() => setActive(2)}
      >
        Description
      </button>
      <button
        className={`preview-button ${
          active === 3 ? "preview-button-active" : ""
        }`}
        onClick={() => setActive(3)}
      >
        Instruction
      </button>
      <button
        className={`preview-button ${
          active === 4 ? "preview-button-active" : ""
        }`}
        onClick={() => setActive(4)}
      >
        HTML-code
      </button>
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
        <Button
          className="save-html"
          icon="glyphicon glyphicon-floppy-save"
          onHandleClick={() =>
            handleUpdate(ad.id, title, description, instruction, htmlCode)
          }
        ></Button>
        <S_Iframe_Preview src={url} title={"Ad Content"}></S_Iframe_Preview>
      </S_PreviewBox_Preview>
    </S_Main>
  );
}
