import { Link } from "react-router-dom";
import { extractUsernameFromToken } from "../utils/extractUsernameFromToken";
import { extractExpiredFromToken } from "../utils/extractExpiredFromToken";

export default function LoggedInNav(token) {
  return (
    <>
      {/* Remove or keep, or change? */}
      {/* <li>
        <Link to="/myPage">My Page</Link>
      </li> */}
      <li>
        <Link to="/myPage">
          <span className="glyphicon glyphicon-user"></span>
          {extractUsernameFromToken(token)}
          {extractExpiredFromToken(token)}
        </Link>
      </li>
      <li>
        <Link to="/logout">
          <span className="glyphicon glyphicon-log-out"></span> Logout
        </Link>
      </li>
    </>
  );
}
