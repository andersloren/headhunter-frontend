import { Link } from "react-router-dom";
import AdminNav from "./AdminNav";
import LoggedInNav from "./LoggedInNav";
import { extractRolesFromToken } from "../utils/token/extractRolesFromToken";
import "bootstrap/dist/css/bootstrap.min.css";
import UserNav from "./UserNav";

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
        {roles.includes("user") && (
          <ul className="nav navbar-nav">
            <AdminNav />
          </ul>
        )}

        {/* All user links */}
        {roles.includes("user") && (
          <ul className="nav navbar-nav">
            <UserNav />
          </ul>
        )}

        {/* Log out link */}
        <ul className="nav navbar-nav navbar-right">
          <LoggedInNav onHandleToken={onHandleToken} />
        </ul>
      </div>
    </nav>
  );
}
