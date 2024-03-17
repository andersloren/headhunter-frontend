// Libraries, functions, etc.
import { Link } from "react-router-dom";
import { extractRolesFromToken } from "../security/token/extractRolesFromToken";
import UserNav from "./UserNav";
import { extractUsernameFromToken } from "../security/token/extractUsernameFromToken";
import { useEffect, useState } from "react";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import AdminNav from "./AdminNav";
import LoggedInNav from "./LoggedInNav";

/**
 * The navbar gives the user clickable links to navigate the app.
 *
 * States:
 * - 'username': The user's username that is being passed down to one of its children to be displayed in the navbar.
 * - 'roles': The user's roles that decides what links will be shown in the navbar.
 * @param {boolean} isAuthorized - Tells the navbar component if the user is logged in. This prevents other functions within this component from searching for a JWT if there is none.
 * @param {boolean} isAuthorized - Tells the navbar component if the user is logged in. This prevents other functions within this component from searching for a JWT if there is none.
 * @param {String} children - Props from the parent component that states what text should be displayed as the first link in the navbar.
 */

export default function NavBar({ isAuthorized, setIsAuthorized, children }) {
  const [username, setUsername] = useState("");
  const [roles, setRoles] = useState([]);

  /**
   * When isAuthorized is toggled to true, the roles and username will be extracted from the JWT. This prevents the app from searching the browser for a token when there isn't any.
   */

  useEffect(() => {
    if (isAuthorized) {
      setRoles(extractRolesFromToken());
      setUsername(extractUsernameFromToken());
    }
  }, [isAuthorized]);

  return (
    /**
     * Bootstrap Navbar
     */
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            {children}
          </Link>
        </div>

        {/**
         * Navbar links visibly only to users with the role 'admin'
         */}
        {roles.includes("admin") && (
          <ul className="nav navbar-nav">
            <AdminNav />
          </ul>
        )}

        {/**
         * Navbar links visibly only to users with the role 'user'
         * */}
        {roles.includes("user") && (
          <ul className="nav navbar-nav">
            <UserNav />
          </ul>
        )}

        {/**
         * Navbar links visible for all logged in users
         */}
        <ul className="nav navbar-nav navbar-right">
          <LoggedInNav username={username} setIsAuthorized={setIsAuthorized} />
        </ul>
      </div>
    </nav>
  );
}
