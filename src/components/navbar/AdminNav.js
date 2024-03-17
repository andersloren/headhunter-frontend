import { Link } from "react-router-dom";

/**
 * Lists the page that user objects with roles including admin can access.
 *
 * Admins can monitor, edit, and delete users.
 */

export default function AdminNav() {
  return (
    <>
      <li>
        <Link to="/admin">Admin</Link>
      </li>
    </>
  );
}
