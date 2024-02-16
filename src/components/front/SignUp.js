// Libraris, functions, etc
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Custom components
import {
  S_Formbox,
  S_Input,
  S_Check,
  S_ButtonBox_SignUp,
  S_Button,
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
    // const matcher = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{4}$/;
    // let boolean = matcher.test(newPassword);
    setIsPasswordOk(true); // CHANGE THIS WHEN DECOMMENTING THE ABOVE!!!!!
  }

  function handleClick() {
    handleSignUp();
    setLoginVisible(true);
    setSignUpVisible(false);
  }

  return (
    <>
      <S_Formbox>
        <form onSubmit={handleClick}>
          <S_Input
            type="email"
            placeholder="Enter Email"
            value={email}
            $color={String(isEmailOk)}
            onChange={(e) => handleEmailChange(e.target.value)}
          />
          {isEmailOk && <S_Check>Email format is OK </S_Check>}
          <S_Input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <S_Input
            type="password"
            placeholder="Enter Password"
            $color={String(isPasswordOk)}
            value={password}
            onChange={(e) => handlePasswordChange(e.target.value)}
          />
          {isPasswordOk && <S_Check>Password format is OK </S_Check>}

          <div className="clickable-form">
            {isEmailOk && username != null && isPasswordOk && (
              <S_ButtonBox_SignUp>
                <S_Button onClick={() => handleSignUp()}>Submit</S_Button>
              </S_ButtonBox_SignUp>
            )}
          </div>
        </form>
      </S_Formbox>
    </>
  );
}
