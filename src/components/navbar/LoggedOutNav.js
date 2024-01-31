import { Link } from "react-router-dom";

export default function LoggedOutNav() {
  return (
    <>
      {/* Remove or keep, or change? */}
      {/* <li>
        <Link to="/myPage">My Page</Link>
      </li> */}
      <li>
        <Link to="/signUp">
          <span className="glyphicon glyphicon-user"></span> Sign Up
        </Link>
      </li>

      <li>
        <Link to="/login">
          <span className="glyphicon glyphicon-log-in"></span> Login
        </Link>
      </li>
    </>
  );
}
