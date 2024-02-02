import { jwtDecode } from "jwt-decode";

export function extractExpiredFromToken() {
  const decodedToken = jwtDecode(localStorage.getItem("headhunter-token"));
  const dateNow = Date.now() / 1000;
  const tokenExpireTime = decodedToken.exp;
  const tokenLifeExp = (tokenExpireTime - dateNow) / 60;
  console.log("Token life exp:" + tokenLifeExp + " minutes");
  console.log(
    tokenLifeExp > 0 ? "Token has not expired" : "Token has expired"
  );
  const isExpired = tokenExpireTime > Date.now();

  return isExpired;
}
