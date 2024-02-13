import axios from "axios";

export async function generateJobAd(id, handleCRUDSuccess, handlePreview) {
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
    handleCRUDSuccess();
    handlePreview(id);
  } catch (error) {
    console.error("Error generating job ad", error);
  }
}
