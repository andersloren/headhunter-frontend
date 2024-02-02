import React from "react";
import { Link } from "react-router-dom";
import AdminNav from "./AdminNav";
import LoggedInNav from "./LoggedInNav";
import TokenTimer from "./TokenTimer";
import { extractRolesFromToken } from "../utils/token/extractRolesFromToken";
import { extractExpiredFromToken } from "../utils/token/extractExpiredFromToken";

export default function NavBar({ onHandleToken, children }) {
  const roles = extractRolesFromToken();
  const expirationTime = extractExpiredFromToken();

  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            {children}
          </Link>
        </div>

        {roles.map(
          (role) =>
            role === "admin" && (
              <ul className="nav navbar-nav">
                <AdminNav />
              </ul>
            )
        )}

        {expirationTime && (
          <ul className="nav navbar-nav">
            <TokenTimer
              expirationTime={expirationTime}
              onTokenExpired={() => {
                onHandleToken(false);
              }}
            />
          </ul>
        )}

        <ul className="nav navbar-nav navbar-right">
          <LoggedInNav onHandleToken={onHandleToken} />
        </ul>
      </div>
    </nav>
  );
}
