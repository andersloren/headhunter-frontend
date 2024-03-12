// Libraries, functions, etc.
import axios from "axios";
import { extractEmailFromToken } from "../../security/token/extractEmailFromToken";

export async function getAllMyJobs(setJobList) {
  const email = extractEmailFromToken();

  const url = `http://localhost:8080/api/v1/jobs/findAllJobsByUserEmail/${email}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
        "Content-Type": "application/json",
      },
    });
    // console.log("Find all jobs by email success");
    setJobList(response.data.data);
  } catch (error) {
    console.error("Error get all Jobs", error);
  }
}
