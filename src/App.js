// Libraries, functions, etc.
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
// import { extractExpiredFromToken } from "./components/utils/token/extractExpiredFromToken";

// CSS
// import "./style.css";

// Front pages
import Login from "./components/front/Login";
import SignUp from "./components/front/SignUp";
import Welcome from "./components/front/Welcome";

// User pages
import Home from "./components/user/Home";
import MyPage from "./components/user/MyPage";

// Admin pages
import GetAll from "./components/admin/GetAll";
import GetByEmail from "./components/admin/GetByEmail";
import Update from "./components/admin/Update";
import Add from "./components/admin/Add";
import Delete from "./components/admin/Delete";

export default function App() {
  const [isToken, setIsToken] = useState(false);

  // don't send this all components unless necessary
  const localToken = "headhunter-token";

  function handleToken(boolean) {
    setIsToken(boolean);
  }

  // if (localStorage.getItem("headhunter-token"))
  //   setIsToken(extractExpiredFromToken());
  // else {
  //   setIsToken(false);
  // }

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
      <NavBar
        token={localToken}
        // onHandleToken={handleToken}
      >
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
