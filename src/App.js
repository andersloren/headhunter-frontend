import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/pages/Login";
import Home from "./components/pages/Home";
import MyPage from "./components/pages/MyPage";
import SignUp from "./components/pages/SignUp";
import { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleUsername(username) {
    setUsername(username);
  }

  function handleIsLoggedIn(boolean) {
    setIsLoggedIn(boolean);
  }

  function handleToken(token) {
    setToken(token);
  }

  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} onIsLoggedIn={handleIsLoggedIn}>
        Headhunter
      </NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route
          path="/login"
          element={
            <Login
              onUsername={handleUsername}
              onIsLoggedIn={handleIsLoggedIn}
              onToken={handleToken}
            />
          }
        />
        <Route
          path="/myPage"
          element={<MyPage username={username} token={token} />}
        />
      </Routes>
    </>
  );
}
