import { jwtDecode } from "jwt-decode";

export function extractEmailFromToken() {
  const decodedToken = jwtDecode(localStorage.getItem("headhunter-token"));

  const email = decodedToken.email;

  return email;
}
