import { jwtDecode } from "jwt-decode";

export function extractRolesFromToken() {

  const decodedToken = jwtDecode(localStorage.getItem("headhunter-token"));

  const roles = decodedToken.roles;

  const prexifedRolesArr = roles.split(" ");

  const rolesArr = prexifedRolesArr.map((role) => {
    const indexOfUnderscore = role.indexOf("_");
    // returns string that comes after "_": ROLE_admin => admin
    // +1 is required to get correct position in string
    return role.slice(indexOfUnderscore + 1);
  });
  return rolesArr;
}
