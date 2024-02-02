import { jwtDecode } from "jwt-decode";

export function extractExpiredFromToken() {
  const decodedToken = jwtDecode(localStorage.getItem("headhunter-token"));
  const tokenExpireTime = decodedToken.exp;


  return tokenExpireTime; // Return the actual expiration time
}
