// Libraries, functions, etc.
import { extractExpiredFromToken } from "./token/extractExpiredFromToken";

export function authorize() {
  //   const localToken = "headhunter-token";
  const storedToken = localStorage.getItem("headhunter-token");

  let isAuthorized = false;

  if (storedToken != null && extractExpiredFromToken()) {
    return (isAuthorized = true);
  }
  return isAuthorized;
}
