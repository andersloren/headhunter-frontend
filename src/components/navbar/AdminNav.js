import { Link } from "react-router-dom";

export default function AdminNav() {
  return (
    <>
      <li>
        <Link to="/getAll">Get All</Link>
      </li>
      <li>
        <Link to="/getByEmail">Get User</Link>
      </li>
      <li>
        <Link to="/update">Update User</Link>
      </li>
      <li>
        <Link to="/add">Add User</Link>
      </li>
      <li>
        <Link to="/delete">Delete User</Link>
      </li>
    </>
  );
}
