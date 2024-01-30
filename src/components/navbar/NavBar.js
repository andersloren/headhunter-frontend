import { Link } from "react-router-dom";

export function NavBar({ children, onIsLoggedIn }) {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            {children}
          </Link>
        </div>
        <ul className="nav navbar-nav">
          {/* <li className="active">
            <Link to="/">Home</Link>
          </li> */}
          {/* <li className="dropdown">
            <Link className="dropdown-toggle" data-toggle="dropdown" to="#">
              Page 1 <span className="caret"></span>
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="#">Inaktiv länk</Link>
              </li>
              <li>
                <Link to="#">Page 1-2</Link>
              </li>
              <li>
                <Link to="#">Page 1-3</Link>
              </li>
            </ul>
          </li> */}
          {/* <li>
            <Link to="#">Page 2</Link>
          </li> */}
        </ul>
        <ul className="nav navbar-nav navbar-right">
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
          <li>
            <Link to="/logout">
              <span
                className="glyphicon glyphicon-log-out"
                onClick={() => onIsLoggedIn(false)}
              ></span>{" "}
              Logout
            </Link>
          </li>
          ;
        </ul>
      </div>
    </nav>
  );
}
