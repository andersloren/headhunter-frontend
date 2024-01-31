import { jwtDecode } from "jwt-decode";

export function extractUsernameFromToken(token) {
  console.log("extractUsernameFromToken: ", token);
  const decodedToken = jwtDecode(token.token);

  const username = decodedToken.username;

  return username;
}
