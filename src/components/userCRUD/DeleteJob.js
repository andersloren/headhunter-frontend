// Libraries, functions, etc
import axios from "axios";
import { useState } from "react";
import { extractEmailFromToken } from "../utils/token/extractEmailFromToken";

// Custom components
import Input from "../utils/input/Input";

export default function DeleteJob() {
  const [id, setId] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  function handleDeleteJobById(e) {
    e.preventDefault();
    // console.log(e.target.value);
    deleteJob(id);
  }
  const email = extractEmailFromToken();

  async function deleteJob() {
    console.log("id in function = ", id);
    console.log("email in function = ", email);
    const url = "http://localhost:8080/api/v1/jobs/delete";

    try {
      const response = await axios.delete(url, {
        data: {
          id: id,
          email: email,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
          "Content-Type": "application/json",
        },
      });
      console.log(response.data.message);
      setIsVisible(true);
    } catch (error) {
      console.error("Error deleting job by id", error);
    }
  }
  return (
    <div className="main">
      <div className="heading-text-box">
        <h1 className="heading-primary">Delete Job</h1>
        <div className="form-box">
          <form onSubmit={handleDeleteJobById}>
            <p>
              <Input
                type="number"
                placeholder="Enter Id"
                state={id}
                onSetState={setId}
              />
            </p>
            <p>
              <button>Delete</button>
            </p>
          </form>
          {isVisible && <p>Job wit id {id} was successfully deleted</p>}
        </div>
      </div>
    </div>
  );
}
