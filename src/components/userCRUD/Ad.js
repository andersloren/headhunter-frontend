// Functions, libraries, etc.
import { findAllAdsByJobId } from "./adFunctions/findAllAdsByJobId";
import { saveAd } from "./adFunctions/saveAd";

// Styled Components
import { useEffect, useState } from "react";
import { S_Main } from "../utils/styledMain";
import {
  S_FunctionalityButton_Box_Preview,
  S_Buttons_Edit_Preview,
  S_Iframe_Preview,
  S_PreviewBox_Preview,
  S_JobEdit_And_Ad_Box,
} from "./styledComponents";
import { deleteAd } from "./adFunctions/deleteAd";

export default function Ad({ jobId }) {
  const [adList, setAdList] = useState([]);
  const [htmlCode, setHtmlCode] = useState("");
  const [adId, setAdId] = useState(1);
  const [refreshAdTabs, setRefreshAdTabs] = useState(false);

  useEffect(() => {
    findAllAdsByJobId(jobId, setAdList);
  }, [refreshAdTabs, jobId]);

  useEffect(() => {
    setAdId(null);
    setHtmlCode("");
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

  function handleAdCRUDSuccess() {
    setRefreshAdTabs((refresh) => !refresh);
  }

  const blob = new Blob([htmlCode], { type: "text/html" });
  const url = URL.createObjectURL(blob);

  console.log("Ad, adId", adId);

  return (
    <S_Main>
      <S_JobEdit_And_Ad_Box>
        {adList.map((ad, index) => (
          <S_Buttons_Edit_Preview
            key={ad.id}
            onClick={() => {
              handleDisplayedAd(ad.id);
              setHtmlCode(ad.htmlCode);
            }}
            $active={adId === ad.id ? "true" : "false"}
          >
            Ad {index}
          </S_Buttons_Edit_Preview>
        ))}
        <S_PreviewBox_Preview>
          <S_Iframe_Preview src={url} title={"Ad Content"}></S_Iframe_Preview>
        </S_PreviewBox_Preview>
        <button onClick={() => findAllAdsByJobId(jobId, setAdList)}>
          Find All Ads
        </button>
        <button
          onClick={() => {
            console.log("Save Ad was clicked");
            handleSaveAd();
          }}
        >
          Save Ad
        </button>
        <button
          onClick={() => {
            console.log("Delete Ad was clicked");
            handleDeleteAd();
          }}
        >
          Delete Ad
        </button>
      </S_JobEdit_And_Ad_Box>
    </S_Main>
  );
}
