// Styled Components
import { useState } from "react";
import {
  S_Main,
  S_FunctionalityButton_Box_Preview,
  S_FunctionalityButton_Preview,
  S_Buttons_Edit_Preview,
  S_Iframe_Preview,
} from "../utils/styledMain";

export default function Ad() {
  const [activeAd, setActiveAd] = useState(null);

  // Variable for htmlCode, this might have to be removed
  const htmlCode = "";

  const blob = new Blob([htmlCode], { type: "text/html" });
  const url = URL.createObjectURL(blob);

  return (
    <S_Main>
      <S_Iframe_Preview src={url} title={"Ad Content"}></S_Iframe_Preview>
      <S_FunctionalityButton_Box_Preview>
        Save Ad:
        <button
          onClick={() => {
            console.log("Save Ad was clicked");
          }}
        >
          Save Ad
        </button>
        Delete Ad:
        <S_FunctionalityButton_Preview
        //   onClick={() => handleDelete(jobId)}
        //   onMouseOver={() => handleActiveButton("101")}
        //   onMouseLeave={() => handleActiveButton("")}
        >
          ❌
        </S_FunctionalityButton_Preview>
      </S_FunctionalityButton_Box_Preview>
      <S_Buttons_Edit_Preview
        onClick={() => setActiveAd(1)}
        $active={activeAd === 1 ? "true" : "false"}
      >
        Ad 1
      </S_Buttons_Edit_Preview>
      <S_Buttons_Edit_Preview
        onClick={() => setActiveAd(2)}
        $active={activeAd === 2 ? "true" : "false"}
      >
        Ad 2
      </S_Buttons_Edit_Preview>
    </S_Main>
  );
}
