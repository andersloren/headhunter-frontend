// Libraris, functions, etc
import { useState } from "react";
import axios from "axios";

// Custom components
import {
  S_FormBox,
  S_Input,
  S_FormatConfirm,
  S_ButtonBox_SignUpSubmit,
  S_Button,
  S_InputLabel,
  S_Check,
  S_InputFlex,
} from "./styledComponents.js";

// CSS
import "./signupStyles.css";

export default function SignUp({ setLoginVisible, setSignUpVisible }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailOk, setIsEmailOk] = useState(false);
  const [isPasswordOk, setIsPasswordOk] = useState(false);

  async function handleSignUp() {
    // event.preventDefault();
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
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ // How to accept 2 character top domain
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
              // $color={String(isEmailOk)}
              onChange={(e) => handleEmailChange(e.target.value)}
            />
            <S_Check $approved={isEmailOk ? "true" : "false"}>✔</S_Check>
          </S_InputFlex>
          {/* {isEmailOk && <S_FormatConfirm>Email format is OK </S_FormatConfirm>} */}

          {/* <S_InputLabel>Username</S_InputLabel> */}
          <S_InputFlex>
            <S_Input
              type="text"
              placeholder="Enter Username"
              // $color={String(username ? "true" : "false")}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <S_Check $approved={username !== "" ? "true" : "false"}>✔</S_Check>
          </S_InputFlex>

          {/* <S_InputLabel>Password</S_InputLabel> */}
          <S_InputFlex>
            <S_Input
              type="password"
              placeholder="Enter Password"
              // $color={isPasswordOk ? "true" : "false"}
              value={password}
              onChange={(e) => handlePasswordChange(e.target.value)}
            />
            <S_Check $approved={isPasswordOk ? "true" : "false"}>✔</S_Check>
          </S_InputFlex>
          {/* {isPasswordOk && (
            <S_FormatConfirm>Password format is OK </S_FormatConfirm>
          )} */}

          {isEmailOk && username != null && isPasswordOk && (
            <S_ButtonBox_SignUpSubmit>
              <S_Button onClick={() => handleSignUp()}>Submit</S_Button>
            </S_ButtonBox_SignUpSubmit>
          )}
        </form>
      </S_FormBox>
    </>
  );
}
