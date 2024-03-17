// Libraries, functions, etc.
import { Link } from "react-router-dom";

/**
 * Logged in users can chose to click their username to navigate to their profile page, or click the logout icon to logout.
 *
 * TODO - Either add content to the user's profile page, or removing the feature all together.
 *
 * @param {boolean} setIsAuthorized - When the user choses to logout, isAuthorized sets to false and ends the session.
 * @param {String} username - The username is drilled down to this component in order to display the users name in the navbar.
 */

export default function LoggedInNav({ setIsAuthorized, username }) {
  /**
   * When the user clicks on the logout symbol, the JWt is removed and resets the authorization state.
   *
   * On success:
   * - Deletes the locally stored JWT.
   * - isAuthorized turns to false, causing the user's session to end.
   *
   * @function
   */

  function handleClick() {
    localStorage.removeItem("headhunter-token");
    setIsAuthorized(false);
  }
  return (
    <>
      <li>
        {/**
         * Link to user's profile page.
         */}
        <Link to="/myPage">
          <span className="glyphicon glyphicon-user"></span>
          {username}
        </Link>
      </li>
      <li>
        {/**
         * Link to makes the user to logout.
         */}
        <Link to="/" onClick={() => handleClick()}>
          <span className="glyphicon glyphicon-log-out"></span> Logout
        </Link>
      </li>
    </>
  );
}
