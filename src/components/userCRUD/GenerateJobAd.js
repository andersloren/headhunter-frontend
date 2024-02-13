import axios from "axios";
import HtmlCodeDisplay from "./htmlPurifier/HtmlCodeDisplay";

import "./addJobStyles.css";
import { useState } from "react";

import "./generateJobAd.css";

export default function GenerateJobAd() {
  const [htmlCode, setHtmlCode] = useState(`<!DOCTYPE html>
  <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
        }
        h1,
        h2,
        h3 {
          color: #006400;
        }
        .requirements {
          color: #8b0000;
          font-weight: bold;
        }
        .merits {
          color: #00008b;
        }
      </style>
    </head>
    <body>
      <h1>Applikationsspecialist, SwCG</h1>
      <h2>Plats: Jönköping</h2>
      <p>
        Vi söker en driven Applikationsspecialist till vår kund i Jönköping. Denna
        roll erbjuder möjlighet att utvecklas inom olika verksamhetsområden och
        systemstöd inom sjukvården. Som Applikationsspecialist är det ditt uppdrag
        att stödja våra kunder med felsökning, problemlösning och
        systemförvaltning. Du blir länken mellan slutanvändare, systemförvaltare
        och oss på IT-drift.
      </p>
      <h3>Om jobbet</h3>
      <p>
        I större projekt kan du komma att delta och ha ett mer kravorienterat
        fokus. Du får även möjlighet att bidra till att projektet levererar
        nödvändiga leverabler som systemdokumentation till organisationen. Vi
        jobbar agilt och målfokuserat tillsammans och du kommer att samarbeta tätt
        med teamets övriga kompetenser och andra förvaltningsgrupper inom
        IT-centrum.
      </p>
      <h3>Uppdragets omfattning</h3>
      <p>
        Uppdraget ska genomföras av en konsult och uppdragets omfattning är 60-100
        % av en heltidstjänst.
      </p>
      <h3>Krav</h3>
      <ul class="requirements">
        <li>Relevant IT-utbildning</li>
        <li>Dokumenterad erfarenhet av att beskriva och dokumentera lösningar</li>
        <li>Dokumenterad erfarenhet av test av applikationer</li>
        <li>Dokumenterad erfarenhet av arbete med vårdrelaterade IT-system</li>
        <li>Har arbetat och verkat hos en Region</li>
        <li>Drivande och har förmåga att hålla ihop mindre uppdrag</li>
        <li>Strukturerad med god analytisk- och problemlösningsförmåga</li>
        <li>God kommunikativ förmåga</li>
        <li>Social och har lätt för att arbeta i team</li>
        <li>Förmåga att omsätta krav i realiserbart IT-stöd</li>
        <li>God förståelse för hela systemutvecklingskedjan</li>
      </ul>
      <h3>Meriterande kompetens</h3>
      <ul class="merits">
        <li>
          Dokumenterad erfarenhet av arbete inom förvaltningsområdet eHälsa hos
          Region Jönköpings län och då några av följande system; Blå appen,
          Carelink, Checkware, Journalia, Medidoc, Obstetrix, Picsara
        </li>
      </ul>
    </body>
  </html>`);
  const [id, setId] = useState(0);

  console.log(id);
  console.log("htmlCode: ", htmlCode);

  function handleClick(e) {
    e.preventDefault();
    generateJobAd();
  }

  async function generateJobAd() {
    const url = `http://localhost:8080/api/v1/jobs/generate/${id}`;

    try {
      console.log(id);
      console.log(url);
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
          "Content-Type": "application/json",
        },
      });
      console.log("get successful");
      console.log(response.data.data);
      setHtmlCode(response.data.data);
    } catch (error) {
      console.error("Error generating job ad", error);
    }
  }

  return (
    <div className="main">
      <div className="generate-heading-text-box">
        <h1 className="generate-heading-primary">Generate Job Ad</h1>
      </div>
      <form onSubmit={handleClick}>
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
        ></input>
        <button>Click here to generate an ad</button>
      </form>
      <div className="side-by-side-container">
        <HtmlCodeDisplay htmlCode={htmlCode} />
      </div>
    </div>
  );
}
