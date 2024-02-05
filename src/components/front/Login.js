// Libraris, functions, etc
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { extractExpiredFromToken } from "../../utils/token/extractExpiredFromToken";

// Custom Components
import Input from "../utils/input/Input";
import Button from "../utils/buttons/Button";

// CSS
import "./loginStyles.css";

export default function Login({ onHandleToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleAuthentication(token) {
    localStorage.setItem("headhunter-token", token);
    navigate("/myPage");
    onHandleToken(true);
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
      console.log("Raw token from response, Login: ", response.data.data.token);
      handleAuthentication(response.data.data.token);
    } catch (error) {
      console.error("Error logging in", error);
    }
  }

  function handleClick(e) {
    e.preventDefault();

    handleLogin(e);
    navigate("/myPage");
  }

  function navigateBack() {
    navigate("/");
  }

  return (
    <div className="main">
      <div className="login-heading-text-box">
        <h1 className="login-heading-primary">Login</h1>
        <div className="login-form-box">
          <form action="" onSubmit={handleClick}>
            <p>
              <Input
                type="email"
                placeholder="Email"
                state={email}
                onSetState={setEmail}
              >
                Email
              </Input>
            </p>
            <p>
              <Input
                type="Password"
                placeholder="Password"
                state={password}
                onSetState={setPassword}
              >
                Password
              </Input>
            </p>
            <div className="clickable-form">
              <Button onHandleClick={navigateBack}>Go Back</Button>
              <Button
                border={"clickable-login"}
                icon={"glyphicon glyphicon-log-in"}
                alignment={"clickable-center-alignment"}
                onHandleClick={handleClick}
              ></Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
