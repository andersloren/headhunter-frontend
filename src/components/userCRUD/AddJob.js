import { useState } from "react";
import { extractEmailFromToken } from "../utils/token/extractEmailFromToken";


import "./addJobStyles.css";
// import Button from "../utils/buttons/Button";
// eslint-disable-next-line
import axios from "axios";
// eslint-disable-next-line
import Input from "../utils/input/Input";
// eslint-disable-next-line
import Span from "../utils/span/Span";
import Button from "../utils/buttons/Button";

export default function AddJob() {
  const [description, setDescription] = useState("");

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
      <div className="addjob-heading-text-box">
        <h1 className="addjob-heading-primary">Add new job</h1>
      </div>
      <div className="addjob-interaction-text-box">
        <form onSubmit={handleSubmit}>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter job ad text here"
          />
          <p><Button>Add</Button></p>

        </form>
      </div>
    </div>
  );
}

// className={"Enter job ad text here"}
