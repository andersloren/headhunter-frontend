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
import MyPage from "./components/user/MyPage";
import AddJob from "./components/user/AddJob";

// Admin pages
import GetAllUser from "./components/admin/GetAllUsers";
import GetByEmailUser from "./components/admin/GetByEmailUser";
import UpdateUser from "./components/admin/UpdateUser";
import AddUser from "./components/admin/AddUser";
import DeleteUser from "./components/admin/DeleteUser";

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
        {/* {Landing} */}
        <Route path="/" element={<Welcome />} />

        {/* {Anonymous user links} */}
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        {/* {Logged in user links} */}
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/addJob" element={<AddJob />} />

        {/* {Admin only links} */}
        <Route path="/getAll" element={<GetAllUser />} />
        <Route path="/getByEmail" element={<GetByEmailUser />} />
        <Route path="/update" element={<UpdateUser />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/delete" element={<DeleteUser />} />
      </Routes>
    </>
  );
}
