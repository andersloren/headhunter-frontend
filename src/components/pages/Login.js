import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Input from "../utils/Input";

export function Login({ onUsername, onToken, onRoles }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleAuthentication(token, username, roles) {
    onToken(token);
    onUsername(username);
    onRoles(roles);
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
        response.data.data.userInfo.username,
        response.data.data.userInfo.roles
      );
    } catch (error) {
      console.error("Error logging in", error);
    }
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <p>
          <Input
            placeholder="Enter email"
            state={email}
            onSetState={setEmail}
          />
        </p>
        <p>
          <Input
            type="password"
            placeholder="Enter password"
            state={password}
            onSetState={setPassword}
          />
        </p>
        <button>Login</button>
      </form>
    </div>
  );
}
