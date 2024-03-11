import axios from "axios";
import { extractEmailFromToken } from "../../security/token/extractEmailFromToken";

export async function updateUser(
  email,
  username,
  roles,
  handleUserCRUDSuccess,
  setIsBlur
) {
  const url = `http://localhost:8080/api/v1/users/update/${email}`;

  try {
    const response = await axios.put(
      url,
      {
        username: username,
        roles: roles,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Update Successful");
    handleUserCRUDSuccess();
    setIsBlur(false);
  } catch (error) {
    console.error("Error updating user by email", error);
  }
}
