import { useState } from "react";
import { extractEmailFromToken } from "../utils/token/extractEmailFromToken";

import Button from "../utils/buttons/Button";
import axios from "axios";
import Input from "../utils/input/Input";

export default function AddJob() {
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Handle Submit description", description);
    addJob();
  }

  const email = extractEmailFromToken();
  console.log("Extracted email from token:", email);

  async function addJob() {
    const url = "http://localhost:8080/api/v1/jobs/addJob";

    try {
      const response = await axios.post(
        url,
        {
          email: `${email}`,
          description: `${description}`,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Add Success");
      console.log(response.data.data);
    } catch (error) {
      console.error("Error adding job", error);
    }
  }

  return (
    <div className="main">
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
