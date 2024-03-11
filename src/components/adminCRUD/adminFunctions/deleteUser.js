import axios from "axios";

export async function deleteUser(email) {
  const url = `http://localhost:8080/api/v1/users/delete/${email}`;

  try {
    const response = await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
        "Content-Type": "application/json",
      },
    });
    console.log("User Delete Success");
  } catch (error) {
    console.error("Error delete user by email", error);
  }
}
