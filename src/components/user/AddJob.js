import { useState } from "react";
import { extractEmailFromToken } from "../utils/token/extractEmailFromToken";

import Button from "../utils/buttons/Button";
import axios from "axios";
import Input from "../utils/input/Input";

export default function AddJob() {
  const [description, setDescription] = useState("");

  function handleSubmit(jobDescription) {
    console.log(jobDescription);
    addJob();
  }

  async function addJob() {
    const email = extractEmailFromToken();

    const url = "http://localhost:8080/api/v1/jobs/addJob";

    try {
      const response = await axios.post(
        url,
        {
          email: { email },
          description: { description },
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data.data);
    } catch (error) {
      console.error("Error signing up", error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Write job ad description here"
          state={description}
          onSetState={setDescription}
        ></Input>
        <Button></Button>
      </form>
    </div>
  );
}
