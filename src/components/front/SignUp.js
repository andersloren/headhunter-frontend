// Libraris, functions, etc
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Custom components
import Input from "../utils/input/Input";
import Button from "../utils/buttons/Button";

// CSS
import "./signupStyles.css";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailOk, setIsEmailOk] = useState(false);
  const [isPasswordOk, setIsPasswordOk] = useState(false);

  const navigate = useNavigate();

  async function handleSignUp(event) {
    event.preventDefault();
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
      console.log(response.data.message);
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
    console.log("SignUp Component:", isEmailOk);
  }

  function handlePasswordChange(password) {
    const newPassword = password;
    setPassword(newPassword);
    const matcher = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{13,}$/;
    let boolean = matcher.test(newPassword);
    setIsPasswordOk(boolean);
    console.log("SignUp Component:", isPasswordOk);
  }

  function handleClick(e) {
    e.preventDefault();

    handleSignUp(e);
    navigate("/login");
  }

  function navigateBack() {
    navigate("/");
  }

  return (
    <div className="main">
      <div className="signup-heading-text-box">
        <h1 className="signup-heading-primary">Sign up</h1>
        <div className="signup-form-box">
          <form className="form" onSubmit={handleClick}>
            <p>
              <Input
                textColor={isEmailOk ? "input-valid" : "input-invalid"}
                type={"email"}
                placeholder={"Email"}
                state={email}
                onSetState={handleEmailChange}
              >
                Email
              </Input>
            </p>
            <p>
              <Input
                type="text"
                placeholder="Username"
                state={username}
                onSetState={setUsername}
              >
                Username
              </Input>
            </p>
            <p>
              <Input
                textColor={isPasswordOk ? "input-valid" : "input-invalid"}
                type="password"
                placeholder="Password"
                state={password}
                onSetState={handlePasswordChange}
              >
                Password
              </Input>
            </p>

            <div className="clickable-form">
              <Button onHandleClick={navigateBack}>Go Back</Button>
              <Button
                onHandleClick={handleClick}
                border={"clickable-login"}
                icon={"glyphicon glyphicon-pencil"}
                alignment={"clickable-center-alignment"}
              ></Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
