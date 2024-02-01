import axios from "axios";
import { useState } from "react";
import Input from "../utils/Input";

export default function Update() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [roles, setRoles] = useState("");
  const [user, setUser] = useState([]);

  const [isVisible, setIsVisible] = useState(false);

  function handleUpdateUser(e) {
    console.log(e.target.value);
    e.preventDefault();

    updateUser(e.target.value);

    setIsVisible(true);
  }

  async function updateUser() {
    const url = `http://localhost:8080/api/v1/users/update/${email}`;

    try {
      const response = await axios.put(
        url,
        roles,

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data.data);
      setUser(response.data.data);
    } catch (error) {
      console.error("Error updating user by email", error);
    }
  }

  return (
    <div>
      <form onSubmit={handleUpdateUser}>
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
            placeholder="Enter roles"
            state={roles}
            onSetState={setRoles}
          />
        </p>
        <p>
          <button>Update User</button>
        </p>
      </form>
      {isVisible && (
        <>
          <p>
            Email: {user.email}, Username: {user.username}, Roles: {user.roles}
          </p>
          <button>❌</button>
          <button>✏️</button>
        </>
      )}
    </div>
  );
}
