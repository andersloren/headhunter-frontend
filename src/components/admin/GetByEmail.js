import axios from "axios";
import { useState } from "react";

export default function GetByEmail({ token }) {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  function handleGetUserByEmail(e) {
    e.preventDefault();

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
        <input
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <p>
          <button>Get User By Email</button>
        </p>
      </form>
      {isVisible && (
        <p>
          Email: {user.email}, Username: {user.username}, Roles: {user.roles}
        </p>
      )}
    </div>
  );
}
