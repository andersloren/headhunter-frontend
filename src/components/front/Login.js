// Libraris, functions, etc
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Syled Components
import {
  S_FormBox,
  S_Input,
  S_ButtonBox_Login,
  S_Button,
} from "./styledComponents.js";

// CSS
import "./loginStyles.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
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
      console.log("User Log In Success");
      handleAuthentication(response.data.data.token);
    } catch (error) {
      console.error("Error logging in", error);
    }
  }

  function handleAuthentication(token) {
    localStorage.setItem("headhunter-token", token);
    navigate("/myPage");
  }

  function handleClick(e) {
    e.preventDefault();
    handleLogin(e);
  }

  return (
    <S_FormBox>
      <form action="" onSubmit={handleClick}>
        <S_Input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <S_Input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {email !== "" && password !== "" && (
          <S_ButtonBox_Login>
            <S_Button onClick={(e) => handleClick(e)}>Submit</S_Button>
          </S_ButtonBox_Login>
        )}
      </form>
    </S_FormBox>
  );
}
