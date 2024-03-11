// Functions, libraries, etc.
import { findAllAdsByJobId } from "./adFunctions/findAllAdsByJobId";
import { saveAd } from "./adFunctions/saveAd";

// Styled Components
import { useEffect, useState } from "react";
import { S_Main } from "../styledGlobal";
import {
  S_FunctionalityButton_Box_Preview,
  S_Buttons_Edit_Preview,
  S_Iframe_Preview,
  S_PreviewBox_Preview,
  S_JobEdit_And_Ad_Box,
  S_TopButtons_Box_Preview,
  S_FunctionalityButton_Preview,
} from "./styledUser";
import { deleteAd } from "./adFunctions/deleteAd";

export default function Ad({ jobId, refreshAdTabs, handleAdCRUDSuccess }) {
  const [adList, setAdList] = useState([]);
  const [htmlCode, setHtmlCode] = useState("");
  const [adId, setAdId] = useState(0);

  useEffect(() => {
    findAllAdsByJobId(jobId, setAdList);
  }, [refreshAdTabs, jobId]);

  useEffect(() => {
    if (adList.length > 0) {
      setHtmlCode(adList[0].htmlCode);
    }
  }, [adList]);

  useEffect(() => {
    setAdId(0);
  }, [jobId]);

  function handleSaveAd() {
    saveAd(jobId, htmlCode, handleAdCRUDSuccess);
  }

  function handleDeleteAd() {
    deleteAd(adId, handleAdCRUDSuccess);
  }

  function handleDisplayedAd(id) {
    if (jobId === null) {
      setAdId(id);
    } else if (jobId !== id) {
      setAdId(id);
    } else {
    }
  }

  const blob = new Blob([htmlCode], { type: "text/html" });
  const url = URL.createObjectURL(blob);

  console.log("Ad adId:", adId);

  return (
    <S_Main>
      <S_JobEdit_And_Ad_Box>
        <S_TopButtons_Box_Preview>
          {adList.map((ad, index) => (
            <S_Buttons_Edit_Preview
              key={ad.id}
              onClick={() => {
                handleDisplayedAd(ad.id);
                setHtmlCode(ad.htmlCode);
                setAdId(index);
              }}
              $active={adId === index ? "true" : "false"}
            >
              Ad {index + 1}
            </S_Buttons_Edit_Preview>
          ))}
        </S_TopButtons_Box_Preview>
        <S_PreviewBox_Preview>
          <S_Iframe_Preview src={url} title={"Ad Content"}></S_Iframe_Preview>
        </S_PreviewBox_Preview>
        <S_FunctionalityButton_Box_Preview>
          <S_FunctionalityButton_Preview
            onClick={() => {
              console.log("Delete Ad was clicked");
              handleDeleteAd();
            }}
          >
            ❌
          </S_FunctionalityButton_Preview>
        </S_FunctionalityButton_Box_Preview>
      </S_JobEdit_And_Ad_Box>
    </S_Main>
  );
}
