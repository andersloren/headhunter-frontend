import axios from "axios";
import { useState } from "react";
import Input from "../utils/input/Input";

export default function GetByEmailUser() {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  function handleGetByEmailUser(e) {
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
          Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
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
    <div className="main">
      <div className="heading-text-box">
        <h1 className="heading-primary">Find User</h1>
        <div className="form-box">
          <form onSubmit={handleGetByEmailUser}>
            <p>
              <Input
                placeholder="Enter email"
                state={email}
                onSetState={setEmail}
              />
            </p>
            <p>
              <button>Find User</button>
            </p>
          </form>
          {isVisible && (
            <>
              <p>
                <div className="get-text">
                  Email: {user.email}, Username: {user.username}, Roles:{" "}
                  {user.roles}
                </div>
              </p>
              <button>❌</button>
              <button>✏️</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
