// Libraries, functions, etc.
import axios from "axios";
import { extractEmailFromToken } from "../../security/token/extractEmailFromToken";

export async function updateJob(
  jobId,
  handleJobCRUDSuccess,
  title,
  description,
  instruction,
  handleIsChange
) {
  console.log(jobId);
  const email = extractEmailFromToken();
  const url = `http://localhost:8080/api/v1/jobs/update/${jobId}`;
  try {
    const response = await axios.put(
      url,
      {
        email: email,
        title: title,
        description: description,
        instruction: instruction,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Update Job Success");
    handleJobCRUDSuccess();
    handleIsChange();
  } catch (error) {
    console.error("Error updating job by jobId", error);
  }
}
