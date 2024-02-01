import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  function handleClickSignIn() {
    navigate("/login");
  }

  function handleClickRegister() {
    navigate("/signUp");
  }

  return (
    <div>
      Welcome to Headhunter!
      <p>
        <button onClick={handleClickSignIn}>Sign In</button>
      </p>
      <p>
        <button onClick={handleClickRegister}>Sign Up</button>
      </p>
    </div>
  );
}
