import { extractExpiredFromToken } from "../utils/token/extractExpiredFromToken";
import { extractRolesFromToken } from "../utils/token/extractRolesFromToken";
import { extractUsernameFromToken } from "../utils/token/extractUsernameFromToken";

export default function MyPage() {
  const username = extractUsernameFromToken();

  const formattedUsername = username.endsWith("s") ? `${username}'` : `${username}'s`;
  return (
    <div>
      <h1>{formattedUsername} Page</h1>
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
  );
}
