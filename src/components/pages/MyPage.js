import axios from "axios";
import { useState } from "react";

export default function MyPage({ username, token, onLogout }) {
  const [userList, setUserList] = useState([]);
  const [user, setUser] = useState([]);

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
    const email = "m@e.se";
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
      Welcome {username}
      <button onClick={() => handleGetAll()}>Get All</button>
      <button onClick={() => handleGetUserByEmail()}>Get User By Email</button>
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
      <div>
        Email: {user.email}, Username: {user.username}, Roles: {user.roles}
      </div>
    </div>
  );
}
