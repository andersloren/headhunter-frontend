import { jwtDecode } from "jwt-decode";

export function extractExpiredFromToken() {
  const decodedToken = jwtDecode(localStorage.getItem("headhunter-token"));

  console.log("Date now :", Date.now());
  const tokenExpireTime = decodedToken.exp * 1000;
  console.log("Token expires:", tokenExpireTime);

  console.log(
    tokenExpireTime > Date.now() ? "Token has not expired" : "Token has expired"
  );
  const isExpired = tokenExpireTime > Date.now();

  return isExpired;
}
