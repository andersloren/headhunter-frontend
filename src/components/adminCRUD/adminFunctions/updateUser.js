import axios from "axios";

export async function updateUser(username, roles, email) {
  const url = `http://localhost:8080/api/v1/users/update/${email}`;

  try {
    const response = await axios.put({
      url,
      roles,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
        "Content-Type": "application/json",
      },
    });
    console.log("Update Successful");
  } catch (error) {
    console.error("Error updating user by email", error);
  }
}
