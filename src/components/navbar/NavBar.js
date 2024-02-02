import { Link } from "react-router-dom";
import AdminNav from "./AdminNav";
import LoggedInNav from "./LoggedInNav";
import { extractRolesFromToken } from "../utils/token/extractRolesFromToken";


export default function NavBar({ onHandleToken, children }) {
  const roles = extractRolesFromToken();
  // console.log(roles);

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

        {/* Log out link */}
        <ul className="nav navbar-nav navbar-right">
          <LoggedInNav onHandleToken={onHandleToken} />
        </ul>
      </div>
    </nav>
  );
}
