// Libraries, functions, etc.
import axios from "axios";
import { extractEmailFromToken } from "../../security/token/extractEmailFromToken";

export async function updateJob(
  jobId,
  handleCRUDSuccess,
  title,
  description,
  instruction,
  htmlCode,
  setIsChange
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
        htmlCode: htmlCode,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Update Job Success");
    handleCRUDSuccess();
    setIsChange(false);
  } catch (error) {
    console.error("Error updating job by jobId", error);
  }
}
