import { useState } from "react";
import Button from "../utils/buttons/Button";
import "./preview.css";

import { S_Iframe_Preview } from "./styledComponents.js";

export default function Preview({
  description,
  instruction,
  htmlCode,
  setHtmlCode,
  setDescription,
  setInstruction,
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
        Description
      </button>
      <button
        className={`preview-button ${
          active === 2 ? "preview-button-active" : ""
        }`}
        onClick={() => setActive(2)}
      >
        Instruction
      </button>
      <button
        className={`preview-button ${
          active === 3 ? "preview-button-active" : ""
        }`}
        onClick={() => setActive(3)}
      >
        HTML-code
      </button>
      <div className="preview-container">
        <textarea
          className="flex-container-edit"
          value={
            active < 3 ? (active < 2 ? description : instruction) : htmlCode
          }
          onChange={(e) => {
            active < 3
              ? active < 2
                ? setDescription(e.target.value)
                : setInstruction(e.target.value)
              : setHtmlCode(e.target.value);
          }}
        />
        <Button
          className="save-html"
          icon="glyphicon glyphicon-floppy-save"
          onHandleClick={() =>
            handleUpdate(ad.id, description, instruction, htmlCode)
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
