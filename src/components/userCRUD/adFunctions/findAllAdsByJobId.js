// Libraries, functions, etc.
import axios from "axios";

export async function findAllAdsByJobId(jobId, setAdList) {
  const url = `http://localhost:8080/api/v1/ads/findAllAdsByJobId/${jobId}`;

  console.log("findAllAdsByJobId jobId", jobId);

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
        "Content-Type": "application/json",
      },
    });
    console.log("Find all ads by jobId success");
    setAdList(response.data.data);
  } catch (error) {
    console.error("Error get all ads", error);
  }
}
