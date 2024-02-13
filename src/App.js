// Libraries, functions, etc.
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { extractExpiredFromToken } from "./components/utils/token/extractExpiredFromToken";

// CSS
// import "./style.css";

// Front pages
import Login from "./components/front/Login";
import SignUp from "./components/front/SignUp";
import Welcome from "./components/front/Welcome";

// User pages
import MyPage from "./components/userCRUD/MyPage";
import GetByIdJob from "./components/userCRUD/GetByIdJob";
import GetAllJobs from "./components/userCRUD/GetAllJobs";
import AddJob from "./components/userCRUD/AddJob";
import UpdateJob from "./components/userCRUD/UpdateJob";
import DeleteJob from "./components/userCRUD/DeleteJob";

// Admin pages
import GetAllUser from "./components/adminCRUD/GetAllUsers";
import GetByEmailUser from "./components/adminCRUD/GetByEmailUser";
import UpdateUser from "./components/adminCRUD/UpdateUser";
import AddUser from "./components/adminCRUD/AddUser";
import DeleteUser from "./components/adminCRUD/DeleteUser";

export default function App() {
  const localToken = "headhunter-token";
  // Getting the token from local storage to check if it is null or not later
  const storedToken = localStorage.getItem(localToken);
  // eslint-disable-next-line
  const [isToken, setIsToken] = useState(false);

  let isNotExpired = false; // By default the token is expired
  // If the token exists then extract if the token is still valid or not
  if (storedToken != null) {
    // If the token exists
    isNotExpired = extractExpiredFromToken(); // Get the token expiration date
  }

  function handleToken(boolean) {
    setIsToken(boolean);
  }

  if (storedToken == null || !isNotExpired) {
    // If the token doesn't exist or if it exists but has expired, execute the following lines
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
    );
  } // else if token exists execute the following lines

  return (
    <>
      <NavBar
        token={localToken} // This will show the authority's functions in the navbar
        // onHandleToken={handleToken}
      >
        Headhunter
      </NavBar>
      <Routes>
        {/* {Landing} */}
        <Route path="/" element={<Welcome />} />

        {/* {Anonymous User links} */}
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        {/* {Logged in User only links} */}
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/getAllJobs" element={<GetAllJobs />} />
        <Route path="/getByIdJob" element={<GetByIdJob />} />
        <Route path="/updateJob" element={<UpdateJob />} />
        <Route path="/addJob" element={<AddJob />} />
        <Route path="/deleteJob" element={<DeleteJob />} />

        {/* {Admin only links} */}
        <Route path="/getAllUsers" element={<GetAllUser />} />
        <Route path="/getByEmailUser" element={<GetByEmailUser />} />
        <Route path="/updateUser" element={<UpdateUser />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/deleteUser" element={<DeleteUser />} />
      </Routes>
    </>
  );
} // TODO Check authorities and make the app act accordingly
