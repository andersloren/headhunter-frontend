import { useState } from "react";
import Button from "../utils/buttons/Button";
import "./preview.css";

import { S_Iframe_Preview } from "./styledComponents.js";

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
  handleAddVisible,
  ad,
}) {
  const [active, setActive] = useState(3);

  const blob = new Blob([htmlCode], { type: "text/html" });

  const url = URL.createObjectURL(blob);

  return (
    <div className="preview-main">
      <button
        className={`preview-button preview-button preview-button-leftmost ${
          active === 1 ? "preview-button-active" : ""
        }`}
        onClick={() => setActive(1)}
      >
        Title
      </button>
      <button
        className={`preview-button preview-button ${
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
      <div className="preview-container">
        <textarea
          className="flex-container-edit"
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
        />
        <Button
          className="save-html"
          icon="glyphicon glyphicon-floppy-save"
          onHandleClick={() =>
            handleUpdate(ad.id, title, description, instruction, htmlCode)
          }
        ></Button>
        {/* <div
          className="flex-container-ad"
          dangerouslySetInnerHTML={{
            __html: htmlCode,
          }}
        ></div> */}
        {/* <iframe
          src={url}
          title={"Ad Content"}
          width="500"
          height="500"
          frameborder="0"
        ></iframe> */}
        <S_Iframe_Preview
          src={url}
          title={"Ad Content"}
          // width="500"
          // height="500"
          frameborder="0"
        ></S_Iframe_Preview>
      </div>
      <Button
        icon="glyphicon glyphicon-plus"
        onHandleClick={handleAddVisible}
      ></Button>
    </div>
  );
}
