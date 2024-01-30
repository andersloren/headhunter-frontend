import axios from "axios";
import { useState } from "react";

export default function Add({ token }) {
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
    const url = "http://localhost:8080/api/v1/users/register";

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
          <label htmlFor=""></label>
          <input
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </p>
        <p>
          <label htmlFor=""></label>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </p>
        <p>
          <label htmlFor=""></label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </p>
        <p>
          <label htmlFor=""></label>
          <input
            type="text"
            placeholder="Enter roles"
            value={roles}
            onChange={(e) => setRoles(e.target.value)}
          ></input>
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
