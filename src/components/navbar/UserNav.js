// Libraries, functions, etc.
import { Link } from "react-router-dom";

export default function UserNav() {
  return (
    <>
      <li>
        <Link to="/getAllMyJobs">My Jobs</Link>
      </li>
    </>
  );
}
