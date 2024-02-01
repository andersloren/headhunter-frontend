import axios from "axios";
import { useState } from "react";
import Input from "../utils/Input";

export default function Delete() {
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  function handleGetUserByEmail(e) {
    e.preventDefault();

    deleteUser(e.target.value);
  }

  async function deleteUser() {
    const url = `http://localhost:8080/api/v1/users/delete/${email}`;

    try {
      const response = await axios.delete(url, {
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
    <div>
      <form onSubmit={handleGetUserByEmail}>
        <Input placeholder="Enter email" state={email} onSetState={setEmail} />
        <p>
          <button>Delete</button>
        </p>
      </form>
      {isVisible && <p>{email} was successfully deleted</p>}
    </div>
  );
}
