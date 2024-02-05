import { extractExpiredFromToken } from "../utils/token/extractExpiredFromToken";
import { extractRolesFromToken } from "../utils/token/extractRolesFromToken";
import { extractUsernameFromToken } from "../utils/token/extractUsernameFromToken";

export default function MyPage() {
  return (
    <div className="main">
      <div className="heading-text-box">
        <h1 className="heading-primary">My Page</h1>
        <div className="get-text">
          <h4>extractRolesFromToken</h4>
          <div>{extractRolesFromToken().map((role) => `${role} `)}</div>
          <h4>extractUsernameFromToken</h4>
          <div>{extractUsernameFromToken()}</div>
          <h4>extractExpiredFromToken</h4>
          <div>
            {extractExpiredFromToken()
              ? "Token has not expired"
              : "Token has expired"}
          </div>
        </div>
      </div>
    </div>
  );
}
