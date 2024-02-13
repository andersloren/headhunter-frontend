import { Link } from "react-router-dom";

export default function UserNav() {
  return (
    <>
      <li>
        <Link to="/addJob">Add Job</Link>
      </li>
      <li>
        <Link to="/getAllJobs">All My Jobs</Link>
      </li>
      <li>
        <Link to="/getByIdJob">Search Job</Link>
      </li>
      <li>
        <Link to="/updateJob">Update Job</Link>
      </li>
      <li>
        <Link to="/deleteJob">Delete Job</Link>
      </li>
      <li>
        <Link to="/generateJobAd">Generate Job Ad</Link>
      </li>
    </>
  );
}
