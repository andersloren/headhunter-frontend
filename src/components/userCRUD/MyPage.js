import { useEffect, useState } from "react";
import { extractEmailFromToken } from "../utils/token/extractEmailFromToken";

import axios from "axios";

export default function MyPage() {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    getAllUserJobs();
  }, []);

  const email = extractEmailFromToken();

  async function getAllUserJobs() {
    const url = `http://localhost:8080/api/v1/jobs/findAllByUserEmail/${email}`;

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
          "Content-Type": "application/json",
        },
      });
      setJobList(response.data.data);
    } catch (error) {
      console.error("Error get all", error);
    }
  }

  return (
    <div className="main">
      <div className="heading-text-box">
        <h1 className="heading-primary">My Page</h1>
      </div>
      <div className="job-description">
        <ul>
          {jobList.map((job) => (
            <li key={job.id}>{job.description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
