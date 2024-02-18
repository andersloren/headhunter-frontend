import { Link } from "react-router-dom";
import { extractUsernameFromToken } from "../security/token/extractUsernameFromToken";

const username = extractUsernameFromToken();

export default function LoggedInNav({ setIsAuthorized }) {
  function handleClick() {
    localStorage.removeItem("headhunter-token");
    setIsAuthorized(false);
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
        <Link to="/" onClick={() => handleClick()}>
          <span className="glyphicon glyphicon-log-out"></span> Logout
        </Link>
      </li>
    </>
  );
}
