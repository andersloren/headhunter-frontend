// Libraries, functions, etc.
import { Link } from "react-router-dom";

/**
 * Lists the page that user objects with roles including users can access.
 *
 * Users can monitor, add, edit, and delete jobs and ads.
 */

export default function UserNav() {
  return (
    <>
      <li>
        <Link to="/MyJobs">My Jobs</Link>
      </li>
    </>
  );
}
