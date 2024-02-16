// Libraries, functions, etc
import axios from "axios";
import { extractEmailFromToken } from "../../utils/token/extractEmailFromToken";

export async function deleteJob(id, handleCRUDSuccess) {
  const email = extractEmailFromToken();

  const url = "http://localhost:8080/api/v1/jobs/delete";

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
    handleCRUDSuccess();
  } catch (error) {
    console.error("Error deleting job by id", error);
  }
}
