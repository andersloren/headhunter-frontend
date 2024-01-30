import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Login({ onUsername, onToken, onIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleAuthentication(token, username) {
    onToken(token);
    onIsLoggedIn(true);
    onUsername(username);
    navigate("/myPage");
  }

  async function handleLogin(event) {
    event.preventDefault();
    const url = "http://localhost:8080/api/v1/users/login";

    const basicAuth = btoa(`${email}:${password}`);

    try {
      const response = await axios.post(
        url,
        {
          email: email,
          password: password,
        },
        {
          headers: {
            Authorization: `Basic ${basicAuth}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data.data.token);
      handleAuthentication(
        response.data.data.token,
        response.data.data.userInfo.username
      );
    } catch (error) {
      console.error("Error logging in", error);
    }
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <p>
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </p>
        <p>
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </p>
        <button>Login</button>
      </form>
    </div>
  );
}
