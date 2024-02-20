// Libraries, functions, etc.
import { extractEmailFromToken } from "../../security/token/extractEmailFromToken";
import axios from "axios";

export async function addJob(handleCRUDSuccess) {
  const email = extractEmailFromToken();

  const url = "http://localhost:8080/api/v1/jobs/addJob";

  try {
    const response = await axios.post(
      url,
      {
        email: email,
        title: "New Job",
        description: "Add a description",
        instruction: "Add an instruction",
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Job Add Success");
    console.log(response.data.data.title);
    handleCRUDSuccess();
  } catch (error) {
    console.error("Error adding job", error);
  }
}
