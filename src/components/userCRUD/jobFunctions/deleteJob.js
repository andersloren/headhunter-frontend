// Libraries, functions, etc
import axios from "axios";
import { extractEmailFromToken } from "../../security/token/extractEmailFromToken";

export async function deleteJob(id, handleJobCRUDSuccess) {
  console.log("Got to deleteJob");

  const email = extractEmailFromToken();

  const url = `http://localhost:8080/api/v1/jobs/delete/${email}/${id}`;

  try {
    const response = await axios.delete(url, {
      data: {
        id: id,
        email: email,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
        "Content-Type": "application/json",
      },
    });
    console.log("Job Delete Success");
    handleJobCRUDSuccess();
  } catch (error) {
    console.error("Error deleting job by id", error);
  }
}
