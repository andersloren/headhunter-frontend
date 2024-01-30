import axios from "axios";
import { useState } from "react";
import Input from "../utils/Input";

export default function GetByEmail({ token }) {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  function handleGetUserByEmail(e) {
    e.preventDefault();

    console.log(email);

    setIsVisible(true);
    getUserByEmail(e.target.value);
  }

  async function getUserByEmail() {
    const url = `http://localhost:8080/api/v1/users/findUser/${email}`;

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log(response.data.data);
      setUser(response.data.data);
    } catch (error) {
      console.error("Error get user by email", error);
    }
  }
  return (
    <div>
      <form onSubmit={handleGetUserByEmail}>
        <Input placeholder="Enter email" state={email} onSetState={setEmail} />
        <p>
          <button>Find User</button>
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
