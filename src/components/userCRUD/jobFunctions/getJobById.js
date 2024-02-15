import axios from "axios";

export async function getJobById(
  id,
  setAd,
  setDescription,
  setInstruction,
  setHtmlCode
) {
  const url = `http://localhost:8080/api/v1/jobs/findJob/${id}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
        "Content-Type": "application/json",
      },
    });
    console.log(response.data.data);
    setAd(response.data.data);
    setDescription(response.data.data.description);
    setInstruction(response.data.data.instruction);
    setHtmlCode(response.data.data.htmlCode);
  } catch (error) {
    console.error("Error getting job by id", error);
  }
}
