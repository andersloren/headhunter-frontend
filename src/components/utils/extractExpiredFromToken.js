import { jwtDecode } from "jwt-decode";

export function extractExpiredFromToken(token) {
  const decodedToken = jwtDecode(token.token);

  const isExpired = decodedToken.exp < Date.now();

  return isExpired;
}
