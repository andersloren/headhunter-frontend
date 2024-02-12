// Libraries, functions, etc
import axios from "axios";
import { useState } from "react";
// TODO This doesn't work, neither in Postman, check back-end

import Input from "../utils/input/Input";

export default function DeleteUser() {
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  function handleDeleteUserByEmail(e) {
    e.preventDefault();
    deleteUser(email);
  }

  async function deleteUser() {
    const url = `http://localhost:8080/api/v1/users/delete/${email}`;

    try {
      const response = await axios.delete(url,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
            "Content-Type": "application/json",
          },
        });
      console.log(response.data.message);
      setIsVisible(true);
    } catch (error) {
      console.error("Error delete user by email", error);
    }
  }
  return (
    <div className="main">
      <div className="heading-text-box">
        <h1 className="heading-primary">Delete User</h1>
        <div className="form-box">
          <form onSubmit={handleDeleteUserByEmail}>
            <p>
              <Input
                placeholder="Enter email"
                state={email}
                onSetState={setEmail}
              />
            </p>
            <p>
              <button>Delete</button>
            </p>
          </form>
          {isVisible && <p>{email} was successfully deleted</p>}
        </div>
      </div>
    </div>
  );
}
