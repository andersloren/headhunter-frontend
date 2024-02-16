import axios from "axios";
import { extractEmailFromToken } from "../../utils/token/extractEmailFromToken";

export async function updateJob(
  id,
  handleCRUDSuccess,
  description,
  instruction,
  htmlCode
) {
  console.log(id);
  const email = extractEmailFromToken();
  const url = `http://localhost:8080/api/v1/jobs/update/${id}`;
  console.log(url);
  console.log("UPDATE DESCRIPTION:", description);
  console.log("UPDATE INSTRUCTION:", instruction);
  console.log("UPDATE HTMLCODE:", htmlCode);
  try {
    const response = await axios.put(
      url,
      {
        email: email,
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
  } catch (error) {
    console.error("Error updating job by id", error);
  }
}
