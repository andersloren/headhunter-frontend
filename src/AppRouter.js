// Libraries, functions, etc.
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar/NavBar";
import { Routes, Route } from "react-router-dom";

// Front page
import Welcome from "./components/front/Welcome";

// User pages
import MyPage from "./components/userCRUD/MyPage";
import GetAllMyJobs from "./components/userCRUD/GetAllMyJobs";

// Admin pages
import GetAllUser from "./components/adminCRUD/GetAllUsers";
import GetByEmailUser from "./components/adminCRUD/GetByEmailUser";
import UpdateUser from "./components/adminCRUD/UpdateUser";
import AddUser from "./components/adminCRUD/AddUser";
import DeleteUser from "./components/adminCRUD/DeleteUser";

export default function AppRoute({ isAuthorized }) {
  return (
    <>
      {isAuthorized}
      <NavBar>Headhunter</NavBar>
      <Routes>
        <Route path="/" element={<Welcome />} />
        {/* {Logged in User only links} */}
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/getAllMyJobs" element={<GetAllMyJobs />} />

        {/* {Admin only links} */}
        <Route path="/getAllUsers" element={<GetAllUser />} />
        <Route path="/getByEmailUser" element={<GetByEmailUser />} />
        <Route path="/updateUser" element={<UpdateUser />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/deleteUser" element={<DeleteUser />} />
      </Routes>
    </>
  );
}
