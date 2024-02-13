import { useState } from "react";
import "./buttonStyles.css";

export default function Button({
  alignment = "",
  border = "",
  icon = "",
  onHandleClick,
  children = "",
  className = "",
  id,
}) {
  const [activeButton, setActiveButton] = useState(null);

  return (
    <>
      <button
        className={`clickable ${alignment} ${border} ${className} ${icon} ${
          activeButton ? "clickable-mouseOn" : "clickable-mouseOff"
        }`}
        onMouseOver={() => setActiveButton((active) => !active)}
        onMouseLeave={() => setActiveButton(null)}
        onClick={onHandleClick}
      >
        {children}
      </button>
    </>
  );
}
