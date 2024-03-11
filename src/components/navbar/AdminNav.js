import { Link } from "react-router-dom";

export default function AdminNav() {
  return (
    <>
      <li>
        <Link to="/admin">Admin</Link>
      </li>
      {/* <li>
        <Link to="/getByEmailUser">Get User</Link>
      </li>
      <li>
        <Link to="/updateUser">Update User</Link>
      </li>
      <li>
        <Link to="/addUser">Add User</Link>
      </li>
      <li>
        <Link to="/deleteUser">Delete User</Link>
      </li> */}
    </>
  );
}
