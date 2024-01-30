import axios from "axios";
import { useEffect, useState } from "react";

export default function GetAll({ token }) {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  async function getAll() {
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

  return (
    <div>
      <ul>
        {userList.map((user) => (
          <li key={user.email}>
            Email: {user.email}, Username: {user.username}, Roles: {user.roles}
          </li>
        ))}
      </ul>
    </div>
  );
}
