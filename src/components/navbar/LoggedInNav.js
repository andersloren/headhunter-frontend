// Libraries, functions, etc.
import { Link } from "react-router-dom";

export default function LoggedInNav({ setIsAuthorized, username }) {
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
