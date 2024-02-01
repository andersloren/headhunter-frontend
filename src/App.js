import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import MyPage from "./components/pages/MyPage";
import SignUp from "./components/pages/SignUp";
import GetAll from "./components/admin/GetAll";
import GetByEmail from "./components/admin/GetByEmail";
import Update from "./components/admin/Update";
import Add from "./components/admin/Add";
import Delete from "./components/admin/Delete";
import Welcome from "./components/pages/Welcome";
import { useState } from "react";

export default function App() {
  const [isToken, setIsToken] = useState(false);

  const localToken = "headhunter-token";

  function handleToken(boolean) {
    setIsToken(boolean);
  }

  if (!isToken) {
    return (
      <>
        <Routes>
          <Route path="/" element={<Welcome />} />

          <Route path="/signUp" element={<SignUp />} />

          <Route
            path="/login"
            element={<Login onHandleToken={handleToken} />}
          />
        </Routes>
      </>
    ); // Render nothing if the token doesn't exist
  }

  return (
    <>
      <NavBar token={localToken} onHandleToken={handleToken}>
        Headhunter
      </NavBar>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/" element={<Home />} />

        <Route path="/signUp" element={<SignUp />} />

        <Route path="/login" element={<Login localToken={localToken} />} />

        <Route path="/myPage" element={<MyPage />} token={localToken} />

        <Route path="/getAll" element={<GetAll />} />

        <Route path="/getByEmail" element={<GetByEmail />} />

        <Route path="/update" element={<Update />} />

        <Route path="/add" element={<Add />} />

        <Route path="/delete" element={<Delete />} />
      </Routes>
    </>
  );
}
