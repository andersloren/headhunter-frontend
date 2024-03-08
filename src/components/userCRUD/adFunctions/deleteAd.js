// Libraries, functions, etc
import axios from "axios";

export async function deleteAd(adId, handleAdCRUDSuccess) {
  console.log("Got to deleteAd");

  const url = `http://localhost:8080/api/v1/ads/deleteAd/${adId}`;

  try {
    const response = await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
        "Content-Type": "application/json",
      },
    });
    console.log("Ad Delete Success");
    handleAdCRUDSuccess();
  } catch (error) {
    console.error("Error deleting job by id", error);
  }
}
