// Libraries, functions, etc.
import { jwtDecode } from "jwt-decode";

export function extractUsernameFromToken() {
  const decodedToken = jwtDecode(localStorage.getItem("headhunter-token"));

  const username = decodedToken.username;

  return username;
}
