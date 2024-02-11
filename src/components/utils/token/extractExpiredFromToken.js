import { jwtDecode } from "jwt-decode";

export function extractExpiredFromToken() {

  const decodedToken = jwtDecode(localStorage.getItem("headhunter-token"));

  const tokenExpireTime = decodedToken.exp * 1000;

  const isExpired = tokenExpireTime > Date.now();

  return isExpired;

}
