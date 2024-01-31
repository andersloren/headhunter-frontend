import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import MyPage from "./components/pages/MyPage";
import SignUp from "./components/pages/SignUp";
import { useState } from "react";
import GetAll from "./components/admin/GetAll";
import GetByEmail from "./components/admin/GetByEmail";
import Update from "./components/admin/Update";
import Add from "./components/admin/Add";
import Delete from "./components/admin/Delete";

export default function App() {
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");

  function handleUsername(username) {
    setUsername(username);
  }

  function handleToken(token) {
    setToken(token);
  }

  return (
    <>
      <NavBar token={token}>Headhunter</NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route
          path="/login"
          element={<Login onUsername={handleUsername} onToken={handleToken} />}
        />
        <Route
          path="/myPage"
          element={<MyPage greeting={username} token={token} />}
        />
        <Route path="/getAll" element={<GetAll token={token} />} />

        <Route path="/getByEmail" element={<GetByEmail token={token} />} />

        <Route path="/update" element={<Update token={token} />} />

        <Route path="/add" element={<Add token={token} />} />

        <Route path="/delete" element={<Delete token={token} />} />
      </Routes>
    </>
  );
}
