import { Link } from "react-router-dom";
import { extractUsernameFromToken } from "../utils/token/extractUsernameFromToken";
import { useState } from "react";

export default function LoggedInNav({ onHandleToken }) {
  const [username, setUsername] = useState(extractUsernameFromToken());

  function removeTokenFromLocalStorage() {
    localStorage.removeItem("headhunter-token");
    setUsername("");
    onHandleToken(false);
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
