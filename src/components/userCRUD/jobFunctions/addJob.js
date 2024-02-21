// Libraries, functions, etc.
import { extractEmailFromToken } from "../../security/token/extractEmailFromToken";
import axios from "axios";

export async function addJob(handleCRUDSuccess) {
  const email = extractEmailFromToken();
  const url = "http://localhost:8080/api/v1/jobs/addJob";
  const htmlCode =
    '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1."><title>Document</title></head><body></body></html>';

  try {
    const response = await axios.post(
      url,
      {
        email: email,
        title: "Add a Title",
        description: "Add a description",
        instruction: "Add an instruction",
        htmlCode: htmlCode, // What should this be???
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Job Add Success");
    handleCRUDSuccess();
  } catch (error) {
    console.error("Error adding job", error);
  }
}
