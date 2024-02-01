import axios from "axios";
import { useState } from "react";
import Input from "../utils/Input";

export default function Add() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [roles, setRoles] = useState("");
  const [user, setUser] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  function handleAdd(e) {
    e.preventDefault();

    setIsVisible(true);
    addUser();
  }

  async function addUser() {
    const url = "http://localhost:8080/api/v1/users/addUser";

    try {
      const response = await axios.post(
        url,
        {
          email: email,
          username: username,
          password: password,
          roles: roles,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      setUser(response.data.data);
    } catch (error) {
      console.error("Error signing up", error);
    }
  }

  return (
    <div>
      <form onSubmit={handleAdd}>
        <p>
          <Input
            placeholder="Enter email"
            state={email}
            onSetState={setEmail}
          />
        </p>
        <p>
          <Input
            placeholder="Enter username"
            state={username}
            onSetState={setUsername}
          />
        </p>
        <p>
          <Input
            type="password"
            placeholder="Enter password"
            state={password}
            onSetState={setPassword}
          />
        </p>
        <p>
          <Input
            placeholder="Enter roles"
            state={roles}
            onSetState={setRoles}
          />
        </p>
        <button>Add User</button>
      </form>
      {isVisible && (
        <p>
          Email: {user.email}, Username: {user.username}, Roles: {user.roles}
        </p>
      )}
    </div>
  );
}
