// Libraris, functions, etc
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Syled Components
import {
  S_FormBox,
  S_Input,
  S_ButtonBox_LoginSubmit,
  S_Button,
  S_InputFlex,
  S_Check,
} from "./styledComponents.js";

// CSS
import "./loginStyles.css";
import { authorize } from "../security/authorize.js";

export default function Login({ setIsAuthorized }) {
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
      setIsAuthorized(authorize());
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
      <form onSubmit={handleClick}>
        <S_InputFlex>
          <S_Input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <S_Check $approved="false">✔</S_Check>
        </S_InputFlex>

        <S_InputFlex>
          <S_Input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <S_Check $approved="false">✔</S_Check>
        </S_InputFlex>

        {email !== "" && password !== "" && (
          <S_ButtonBox_LoginSubmit>
            <S_Button onClick={(e) => handleClick(e)}>Submit</S_Button>
          </S_ButtonBox_LoginSubmit>
        )}
      </form>
    </S_FormBox>
  );
}
