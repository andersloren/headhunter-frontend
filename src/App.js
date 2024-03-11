// Libraries, functions, etc.
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { authorize } from "./components/security/authorize";

// Front page
import Welcome from "./components/front/Welcome";

// User pages
import MyPage from "./components/userCRUD/MyPage";
import MyJobs from "./components/userCRUD/MyJobs";

// Admin pages
import Admin from "./components/adminCRUD/Admin";

export default function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    if (!isAuthorized) setIsAuthorized(authorize());
  }, [isAuthorized]);

  console.log("App, isAuthorized:", isAuthorized);

  return (
    <>
      {isAuthorized && (
        <NavBar isAuthorized={isAuthorized} setIsAuthorized={setIsAuthorized}>
          Headhunter
        </NavBar>
      )}
      <Routes>
        <Route
          path="/"
          element={<Welcome setIsAuthorized={setIsAuthorized} />}
        />
        {/* {Logged in User only links} */}
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/MyJobs" element={<MyJobs />} />
        {/* {Admin only links} */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}
