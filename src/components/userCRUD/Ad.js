// Functions, libraries, etc.
import { findAllAdsByJobId } from "./adFunctions/findAllAdsByJobId";

// Styled Components
import { useEffect, useState } from "react";
import { S_Main } from "../utils/styledMain";
import {
  S_FunctionalityButton_Box_Preview,
  S_FunctionalityButton_Preview,
  S_Buttons_Edit_Preview,
  S_Iframe_Preview,
  S_PreviewBox_Preview,
  S_JobEdit_And_Ad_Box,
} from "./styledComponents";

export default function Ad({ jobId }) {
  const [adList, setAdList] = useState([]);
  const [activeAd, setActiveAd] = useState(null);
  const [htmlCode, setHtmlCode] = useState("");

  console.log("Ad jobId", jobId);

  // useEffect(() => {
  //   console.log("Ad useEffect - Runs");
  // }, [jobId]);

  const blob = new Blob([htmlCode], { type: "text/html" });
  const url = URL.createObjectURL(blob);

  return (
    <S_Main>
      <S_JobEdit_And_Ad_Box>
        {adList.map((ad) => {
          setHtmlCode(ad.htmlCode);
          <S_Buttons_Edit_Preview
            key={ad.id}
            onClick={() => setActiveAd(1)}
            $active={activeAd === 1 ? "true" : "false"}
          >
            Ad
          </S_Buttons_Edit_Preview>;
        })}
        <S_PreviewBox_Preview>
          <S_Iframe_Preview src={url} title={"Ad Content"}></S_Iframe_Preview>
        </S_PreviewBox_Preview>
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
      </S_JobEdit_And_Ad_Box>
      <button onClick={() => findAllAdsByJobId(jobId, setAdList)}></button>
    </S_Main>
  );
}
