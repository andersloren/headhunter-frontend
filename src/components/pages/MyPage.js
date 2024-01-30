import { jwtDecode } from "jwt-decode";

export default function MyPage({ token }) {
  function handleButton() {
    const user = jwtDecode(token);
    console.log(user);
  }

  return (
    <div>
      My Page
      <button onClick={handleButton}>Decode Token</button>
    </div>
  );
}
