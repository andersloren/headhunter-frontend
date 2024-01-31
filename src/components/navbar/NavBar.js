import { Link } from "react-router-dom";
import AdminNav from "./AdminNav";
import LoggedInNav from "./LoggedInNav";
import LoggedOutNav from "./LoggedOutNav";
import { extractRolesFromToken } from "../utils/extractRolesFromToken";

export default function NavBar({ children, token }) {
  console.log("Navbar Token:", token);

  if (!token)
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">
              {children}
            </Link>
          </div>

          {/* User only links */}
          <ul className="nav navbar-nav navbar-right">
            <LoggedOutNav />
          </ul>
        </div>
      </nav>
    );

  const roles = extractRolesFromToken(token);
  console.log(roles);

  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            {children}
          </Link>
        </div>

        {/* My Pages link */}
        <ul className="nav navbar-nav"></ul>

        {/* Admin only links */}
        {roles.map(
          (role, index) =>
            role === "admin" && (
              <ul className="nav navbar-nav">
                <AdminNav key={index} />
              </ul>
            )
        )}
        {/* Log out link */}
        <ul className="nav navbar-nav navbar-right">
          <LoggedInNav token={token} />
        </ul>
      </div>
    </nav>
  );
}
