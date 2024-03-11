import axios from "axios";

export async function findAllUsers(setUserList) {
  const url = "http://localhost:8080/api/v1/users/findAll";

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
        "Content-Type": "application/json",
      },
    });
    console.log("User List Found Success");
    setUserList(response.data.data);
  } catch (error) {
    console.error("Error get all", error);
  }
}
