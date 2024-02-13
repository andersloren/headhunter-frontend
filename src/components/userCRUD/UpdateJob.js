import axios from "axios";
import { useState } from "react";
import Input from "../utils/input/Input";

import "./userCrud.css";

export default function UpdateJob() {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [job, setJob] = useState([]);

  const [isVisible, setIsVisible] = useState(false);

  function handleUpdateJob(e) {
    console.log(e.target.value);
    e.preventDefault();

    updateJob(e.target.value);

    setIsVisible(true);
  }

  async function updateJob() {
    const url = `http://localhost:8080/api/v1/jobs/update/${id}`;

    try {
      const response = await axios.put({
        url,
        data: {
          description,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
          "Content-Type": "application/json",
        },
      });
      console.log(response.data.data);
      setJob(response.data.data);
    } catch (error) {
      console.error("Error updating job by id", error);
    }
  }

  return (
    <div className="main">
      <div className="heading-text-box">
        <h1 className="heading-primary">Update Job</h1>
        <div className="form-box">
          <form onSubmit={handleUpdateJob}>
            <p>
              <Input placeholder="Enter id" state={id} onSetState={setId} />
            </p>
            <p>
              <Input
                placeholder="Enter title"
                state={title}
                onSetState={setTitle}
              />
            </p>
            <p>
              <Input
                placeholder="Enter desciption"
                state={description}
                onSetState={setDescription}
              />
            </p>
            <p>
              <button>Update Job</button>
            </p>
          </form>
          {isVisible && (
            <>
              <div className="get-text">
                <p>
                  Id: {job.id}, Description: {job.description}
                </p>
              </div>
              <button>❌</button>
              <button>✏️</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
