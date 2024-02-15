import { Link } from "react-router-dom";

export default function UserNav() {
  return (
    <>
      <li>
        <Link to="/getAllMyJobs">My Jobs</Link>
      </li>
      {/* <li>
        <Link to="/updateJob">Update Job</Link>
      </li>
      <li>
        <Link to="/generateJobAd">Generate Job Ad</Link>
      </li> */}
    </>
  );
}
