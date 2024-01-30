import { Link } from "react-router-dom";
import CommonNav from "./CommonNav";
import AdminNav from "./AdminNav";

export function NavBar({ children, roles }) {
  // {roles.split(" ").includes("admin")

  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            {children}
          </Link>
        </div>

        {/* Admin only links */}
        {roles.split(" ").includes("admin") && (
          <ul className="nav navbar-nav">
            <AdminNav />
          </ul>
        )}

        {/* User only links */}
        <ul className="nav navbar-nav navbar-right">
          <CommonNav />
        </ul>
      </div>
    </nav>
  );
}
