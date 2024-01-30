import { Link } from "react-router-dom";

export default function CommonNav() {
  return (
    <>
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
      <li>
        <Link to="/logout">
          <span className="glyphicon glyphicon-log-out"></span> Logout
        </Link>
      </li>
    </>
  );
}
