// Libraries, functions, etc.
import axios from "axios";
import { useEffect, useState } from "react";

// CSS
import "./getAllStyles.css";

export default function GetAll() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  async function getAll() {
    const url = "http://localhost:8080/api/v1/users/findAll";

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
          "Content-Type": "application/json",
        },
      });
      setUserList(response.data.data);
    } catch (error) {
      console.error("Error get all", error);
    }
  }

  return (
    <div className="main">
      <div className="heading-text-box get-text">
        <h1 className="heading-primary">Found Users</h1>
        <ul>
          {userList.map((user) => (
            <li key={user.email}>
              Email: {user.email}, Username: {user.username}, Roles:{" "}
              {user.roles}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
