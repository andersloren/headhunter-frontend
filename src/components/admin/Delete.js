import axios from "axios";
import { useState } from "react";

export default function Delete({ token }) {
  const [email, setEmail] = useState("");

  function handleGetUserByEmail(e) {
    e.preventDefault();

    deleteUser(e.target.value);
  }

  async function deleteUser() {
    const url = `http://localhost:8080/api/v1/users/delete/${email}`;

    try {
      const response = await axios.delete(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log(response.data.message);
    } catch (error) {
      console.error("Error delete user by email", error);
    }
  }
  return (
    <div>
      <form onSubmit={handleGetUserByEmail}>
        <input
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <p>
          <button>Delete User</button>
        </p>
      </form>
    </div>
  );
}
