import { jwtDecode } from "jwt-decode";

export function extractRolesFromToken(token) {
  const decodedToken = jwtDecode(token.token);
  console.log("extractRolesFromToken:", token.token);

  const roles = decodedToken.roles;

  const prexifedRolesArr = roles.split(" ");

  const rolesArr = prexifedRolesArr.map((role) => {
    const indexOfUnderscore = role.indexOf("_");
    // returns string that comes after "_": ROLE_admin => admin
    // +1 is required to get correct position in string
    return role.slice(indexOfUnderscore + 1);
  });
  console.log("Roles returned from extractRolesFromToken: ", rolesArr);
  return rolesArr;
}
