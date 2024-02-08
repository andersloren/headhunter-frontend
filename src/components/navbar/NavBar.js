import { Link } from "react-router-dom";
import AdminNav from "./AdminNav";
import LoggedInNav from "./LoggedInNav";
import { extractRolesFromToken } from "../utils/token/extractRolesFromToken";
import "bootstrap/dist/css/bootstrap.min.css";
import AddJob from "../user/AddJob";

export default function NavBar({ onHandleToken, children }) {
  const roles = extractRolesFromToken();

  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            {children}
          </Link>
        </div>

        {/* Admin only links */}
        {roles.map(
          (role) =>
            role === "admin" && (
              <ul className="nav navbar-nav">
                <AdminNav />
              </ul>
            )
        )}

        {/* All user links */}
        <Link to="/addJob">Add Job</Link>

        {/* Log out link */}
        <ul className="nav navbar-nav navbar-right">
          <LoggedInNav onHandleToken={onHandleToken} />
        </ul>
      </div>
    </nav>
  );
}
