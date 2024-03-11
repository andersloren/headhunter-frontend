// Functions, libraries, etc.
import axios from "axios";

export async function findUserByEmail(email, setUsername, setRoles) {
  const url = `http://localhost:8080/api/v1/users/findUser/${email}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
        "Content-Type": "application/json",
      },
    });
    console.log("User Found Success");
    setUsername(response.data.data.username);
    setRoles(response.data.data.roles);
  } catch (error) {
    console.error("Error get user by email", error);
  }
}
