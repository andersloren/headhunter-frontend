// Libraries, functions, etc.
import axios from "axios";

export async function generateJobAd(
  id,
  handleCRUDSuccess,
  handlePreview,
  setPreviewVisible
) {
  const url = `http://localhost:8080/api/v1/jobs/generate/${id}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
        "Content-Type": "application/json",
      },
    });
    console.log("Job Generate Success");
    handleCRUDSuccess();
    handlePreview(id);
    setPreviewVisible((preview) => !preview);
  } catch (error) {
    console.error("Error generating job ad", error);
  }
}
