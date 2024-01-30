import axios from "axios";
import { useState } from "react";

export default function MyPage({ username, token }) {
  const [userList, setUserList] = useState([]);
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState("");

  async function handleGetAll() {
    const url = "http://localhost:8080/api/v1/users/findAll";

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log(response.data.data[0].email);
      setUserList(response.data.data);
    } catch (error) {
      console.error("Error get all", error);
    }
  }

  async function handleGetUserByEmail() {
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

  function handleSubmit(e) {
    e.preventDefault();

    console.log(e.target.value);

    handleGetUserByEmail(e.target.value);
  }

  return (
    <div>
      Welcome {username}
      <p>
        <button onClick={() => handleGetAll()}>Get All</button>
      </p>
      <div>
        <ul>
          {userList.map((user) => (
            <li key={user.email}>
              Email: {user.email}, Username: {user.username}, Roles:{" "}
              {user.roles}
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
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
      <p>
        Email: {user.email}, Username: {user.username}, Roles: {user.roles}
      </p>
    </div>
  );
}
