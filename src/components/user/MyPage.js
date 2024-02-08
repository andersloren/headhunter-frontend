import { useEffect, useState } from "react";
import { extractExpiredFromToken } from "../utils/token/extractExpiredFromToken";
import { extractRolesFromToken } from "../utils/token/extractRolesFromToken";
import { extractUsernameFromToken } from "../utils/token/extractUsernameFromToken";
// import axios from "axios";

import AddJob from "./AddJob";

export default function MyPage() {
  // const [jobList, setJobList] = useState([]);

  // useEffect(() => {
  //   getAllJobs();
  // }, []);

  // Move this a different component
  // async function getAllJobs() {
  //   const url = "http://localhost:8080/api/v1/jobs/findAll";

  //   try {
  //     const response = await axios.get(url, {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("headhunter-token")}`,
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     setJobList(response.data.data);
  //   } catch (error) {
  //     console.error("Error get all", error);
  //   }
  // }

  return (
    <div className="main">
      <div className="heading-text-box">
        <h1 className="heading-primary">My Page</h1>
        <div className="get-text">
          <h4>extractRolesFromToken</h4>
          <div>{extractRolesFromToken().map((role) => `${role} `)}</div>
          <h4>extractUsernameFromToken</h4>
          <div>{extractUsernameFromToken()}</div>
          <h4>extractExpiredFromToken</h4>
          <div>
            {extractExpiredFromToken()
              ? "Token has not expired"
              : "Token has expired"}
          </div>
        </div>
      </div>
      <div>
        {/*} Remove this once we have moved the getAll function */}
        {/* <ul>
          {jobList.map((job) => (
            <li key={job.id}>{job.description}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}
