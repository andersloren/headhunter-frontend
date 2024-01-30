import axios from "axios";
import { useState } from "react";

export default function Update({ token }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [roles, setRoles] = useState("");

  function handleUpdateUser(e) {
    e.preventDefault();

    updateUser(e.target.value);
  }

  async function updateUser() {
    const url = `http://localhost:8080/api/v1/users/update/${email}`;

    try {
      const response = await axios.put(
        url,
        roles,

        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data.data);
    } catch (error) {
      console.error("Error updating user by email", error);
    }
  }

  return (
    <div>
      <form onSubmit={handleUpdateUser}>
        <p>
          <input
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </p>
        <p>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </p>
        <p>
          <input
            type="text"
            placeholder="Enter roles"
            value={roles}
            onChange={(e) => setRoles(e.target.value)}
          ></input>
        </p>
        <p>
          <button>Update User</button>
        </p>
      </form>
    </div>
  );
}
