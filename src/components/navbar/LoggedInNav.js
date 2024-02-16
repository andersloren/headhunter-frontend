import { Link } from "react-router-dom";
import { extractUsernameFromToken } from "../security/token/extractUsernameFromToken";
import { useState } from "react";

export default function LoggedInNav({ username }) {
  function removeTokenFromLocalStorage() {
    localStorage.removeItem("headhunter-token");
  }

  return (
    <>
      <li>
        <Link to="/myPage">
          <span className="glyphicon glyphicon-user"></span>
          {username}
        </Link>
      </li>
      <li>
        <Link to="/" onClick={removeTokenFromLocalStorage}>
          <span className="glyphicon glyphicon-log-out"></span> Logout
        </Link>
      </li>
    </>
  );
}
