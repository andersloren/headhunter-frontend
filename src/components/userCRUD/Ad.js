// Functions, libraries, etc.
import { findAllAdsByJobId } from "./adFunctions/findAllAdsByJobId";
import { deleteAd } from "./adFunctions/deleteAd";

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
  S_Header,
} from "./styledUser";

export default function Ad({ jobId, refreshAdTabs, handleAdCRUDSuccess }) {
  const [adList, setAdList] = useState([]);
  const [htmlCode, setHtmlCode] = useState("");
  const [adId, setAdId] = useState(0);
  const [activeAd, setActiveAd] = useState(null);

  useEffect(() => {
    if (!adList.length) {
      setHtmlCode("");
    }
  }, [setHtmlCode, adList.length]);

  useEffect(() => {
    findAllAdsByJobId(jobId, setAdList);
  }, [refreshAdTabs, jobId]);

  useEffect(() => {
    if (adList.length > 0) {
      const lastElement = adList[adList.length - 1];
      setAdId(lastElement.id);
      setActiveAd(adList.length - 1);
      setHtmlCode(lastElement.htmlCode);
    }
  }, [adList]);

  const blob = new Blob([htmlCode], { type: "text/html" });
  const url = URL.createObjectURL(blob);

  function handleDeleteAd(adId) {
    if (window.confirm("Are you sure you want to delete this ad ?")) {
      deleteAd(adId, handleAdCRUDSuccess);
    } else {
      console.log("User cancelled delete");
    }
  }

  return (
    <S_Main>
      <S_JobEdit_And_Ad_Box>
        <S_Header>Ad</S_Header>

        {
          // Ad list tabs
        }

        <S_TopButtons_Box_Preview>
          {adList.map((ad, index) => (
            <S_Buttons_Edit_Preview
              key={ad.id}
              onClick={() => {
                setHtmlCode(ad.htmlCode);
                setActiveAd(index);
                setAdId(ad.id);
              }}
              $active={activeAd === index ? "true" : "false"}
            >
              Ad {index + 1}
            </S_Buttons_Edit_Preview>
          ))}
        </S_TopButtons_Box_Preview>

        {
          // Iframe for Ad
        }

        <S_PreviewBox_Preview>
          <S_Iframe_Preview src={url} title={"Ad Content"}></S_Iframe_Preview>
        </S_PreviewBox_Preview>
        <S_FunctionalityButton_Box_Preview>
          <S_FunctionalityButton_Preview
            onClick={() => {
              handleDeleteAd(adId);
            }}
          >
            ❌
          </S_FunctionalityButton_Preview>
        </S_FunctionalityButton_Box_Preview>
      </S_JobEdit_And_Ad_Box>
    </S_Main>
  );
}
