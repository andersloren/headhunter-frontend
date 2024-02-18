import { Link } from "react-router-dom";
import AdminNav from "./AdminNav";
import LoggedInNav from "./LoggedInNav";
import { authorize } from "../security/authorize";
import { extractRolesFromToken } from "../security/token/extractRolesFromToken";
import "bootstrap/dist/css/bootstrap.min.css";
import UserNav from "./UserNav";
import { extractUsernameFromToken } from "../security/token/extractUsernameFromToken";
import { useEffect, useState } from "react";

export default function NavBar({
  isAuthorized,
  setIsAuthorized,
  authorize,
  children,
}) {
  const [username, setUsername] = useState("");
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    if (isAuthorized) {
      setRoles(extractRolesFromToken());
      setUsername(extractUsernameFromToken());
    }
  }, [isAuthorized]);

  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            {children}
          </Link>
        </div>

        {/* Admin only links */}
        {roles.includes("admin") && (
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
          <LoggedInNav username={username} setIsAuthorized={setIsAuthorized} />
        </ul>
      </div>
    </nav>
  );
}
