import axios from "axios";

export async function saveAd(jobId, htmlCode) {
  console.log("Preparing saveAd:", jobId);
  const url = `http://localhost:8080/api/v1/ads/saveAd/${jobId}`;

  try {
    const response = await axios.post(
      url,
      {
        htmlCode: htmlCode,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Save Ad Success");
  } catch (error) {
    console.error("Error saving ad by jobId and htmlCode", error);
  }
}
