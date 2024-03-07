// Libraries, functions, etc.
import axios from "axios";

export async function getAllMyJobs(setJobList) {
  const url = `http://localhost:8080/api/v1/jobs/findAll`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
        "Content-Type": "application/json",
      },
    });
    setJobList(response.data.data);
  } catch (error) {
    console.error("Error get all Jobs", error);
  }
}
