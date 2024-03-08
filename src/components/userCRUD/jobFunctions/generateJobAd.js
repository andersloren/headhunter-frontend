// Libraries, functions, etc.
import axios from "axios";

export async function generateJobAd(documentType, id, handleCRUDSuccess) {
  const url = `http://localhost:8080/api/v1/jobs/generate/${documentType}/${id}`;

  console.log("Communication with OpenAI API initialized");

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
        "Content-Type": "application/json",
      },
    });
    console.log("Job Generate Success");
    handleCRUDSuccess();
  } catch (error) {
    console.error("Error generating job ad", error);
  }
}
