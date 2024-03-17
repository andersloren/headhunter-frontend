// Libraries, functions, etc.
import { Link } from "react-router-dom";

/* 
  This component is unused legacy code and is not being called in the code.

  TODO - Either use this component or remove it.
*/

export default function LoggedOutNav() {
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
    </>
  );
}
