// Libraries, functions, etc.
import axios from "axios";

export async function findAllAdsByJobId(jobId, setAdList) {
  console.log("findAllAdsByJobId jobId", jobId);

  const url = `http://localhost:8080/api/v1/ads/findAllAdsByJobId/${jobId}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
        "Content-Type": "application/json",
      },
    });
    console.log("Find all ads by jobId success");
    const returnedAdList = response.data.data;
    returnedAdList.sort((a, b) =>
      a.createdDateTime > b.createdDateTime ? 1 : -1
    );
    setAdList(returnedAdList);
  } catch (error) {
    console.error("Error get all ads", error);
  }
}
