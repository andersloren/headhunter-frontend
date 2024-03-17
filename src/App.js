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
import { Routes, Route } from "react-router-dom";

/**
 * App deals with the router setup and prevents the navbar from loading in without their being a JWT stored locally.
 *
 * States:
 * - 'isAuthorized': Sets to true if there is a JWT, and that JWT has not expired.
 */

export default function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);

  /**
   * If isAuthorized changes, and if the value is false, it's being checked. If there is a JWT stored in the browser and it hasn't expired, isAuthorized is set to true. Otherwise, it remains false.
   */

  useEffect(() => {
    if (!isAuthorized) setIsAuthorized(authorize());
  }, [isAuthorized]);

  console.log("App, isAuthorized:", isAuthorized);

  return (
    <>
      {/**
       * To prevent the functions within the navbar from running functions that checks for a JWT, and throw an error if there is not JWT, the navbar doesn't even load if there is no JWT stored locally.
       */}
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
        {/**
         * These links can only be routed to if the user is authenticated.
         */}
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/myJobs" element={<MyJobs />} />
        {/**
         * These links can only be routed to if the user is authenticated and its roles include admin.
         */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}
