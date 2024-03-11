// Libraris, functions, etc
import { useState } from "react";
import axios from "axios";

// Custom components
import {
  S_FormBox,
  S_Input,
  S_ButtonBox_Submit,
  S_Button,
  S_Check,
  S_InputFlex,
} from "./styledFront.js";

export default function SignUp({ setLoginVisible, setSignUpVisible }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailOk, setIsEmailOk] = useState(false);
  const [isPasswordOk, setIsPasswordOk] = useState(false);

  async function handleSignUp() {
    const url = "http://localhost:8080/api/v1/users/register";

    try {
      const response = await axios.post(
        url,
        {
          email: email,
          username: username,
          password: password,
          roles: "user",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("New User Sign Up Success", response.data.data);
    } catch (error) {
      console.error("Error signing up", error);
    }
  }

  function handleEmailChange(email) {
    const newEmail = email;
    setEmail(newEmail);
    const matcher = new RegExp(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    );
    let boolean = matcher.test(newEmail);
    setIsEmailOk(boolean);
  }

  function handlePasswordChange(password) {
    const newPassword = password;
    setPassword(newPassword);
    const matcher = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    let boolean = matcher.test(newPassword);
    setIsPasswordOk(boolean);
    // setPassword(password); // temporary, remove when in
    // setIsPasswordOk(true); // temporary, remove when in prod
  }

  function handleClick() {
    handleSignUp();
    setLoginVisible(true);
    setSignUpVisible(false);
  }

  return (
    <>
      <S_FormBox>
        <form onSubmit={handleClick}>
          <S_InputFlex>
            <S_Input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
            />
            <S_Check $approved={isEmailOk ? "true" : "false"}>✔</S_Check>
          </S_InputFlex>
          <S_InputFlex>
            <S_Input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <S_Check $approved={username !== "" ? "true" : "false"}>✔</S_Check>
          </S_InputFlex>

          <S_InputFlex>
            <S_Input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => handlePasswordChange(e.target.value)}
            />
            <S_Check $approved={isPasswordOk ? "true" : "false"}>✔</S_Check>
          </S_InputFlex>

          {isEmailOk && username != null && isPasswordOk && (
            <S_ButtonBox_Submit>
              <S_Button onClick={() => handleSignUp()}>Submit</S_Button>
            </S_ButtonBox_Submit>
          )}
        </form>
      </S_FormBox>
    </>
  );
}
