import { useState } from "react";
import axios from "axios";
import Input from "../utils/Input";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
      navigate("/");
    } catch (error) {
      console.error("Error signing up", error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSignUp}>
        <p>
          <Input
            placeholder="Enter email"
            state={email}
            onSetState={setEmail}
          />
        </p>
        <p>
          <Input
            placeholder="Enter username"
            state={username}
            onSetState={setUsername}
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
        <button>Sign Up</button>
      </form>
    </div>
  );
}
