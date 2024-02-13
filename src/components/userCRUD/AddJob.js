// Libraries, functions, etc.
import { useState } from "react";
import { extractEmailFromToken } from "../utils/token/extractEmailFromToken";
import axios from "axios";
import Button from "../utils/buttons/Button";

// Custom components
import Input from "../utils/input/Input";

// CSS
import "./addJobStyles.css";

export default function AddJob() {
  const [description, setDescription] = useState("");
  const [instruction, setInstruction] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addJob();
  }

  const email = extractEmailFromToken();

  async function addJob() {
    const url = "http://localhost:8080/api/v1/jobs/addJob";

    try {
      const response = await axios.post(
        url,
        {
          email: email,
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
      console.log("Add Success");
      console.log(response.data.data);
    } catch (error) {
      console.error("Error adding job", error);
    }
  }

  return (
    <div className="main">
      <div className="addjob-heading-text-box">
        <h1 className="addjob-heading-primary">Add new job</h1>
      </div>
      <div className="addjob-interaction-text-box">
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Enter instruction1 here"
            state={instruction}
            onSetState={setInstruction}
          ></Input>
          <textarea
            className="input-default"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter job ad text here"
          />
          <p>
            <Button>Add</Button>
          </p>
        </form>
      </div>
    </div>
  );
}
