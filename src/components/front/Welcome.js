// Libraris, functions, etc.
import { useNavigate } from "react-router-dom";
import Button from "../utils/buttons/Button";
// import { extractExpiredFromToken } from "../../utils/token/extractExpiredFromToken";

// CSS
import "./welcomeStyles.css";

export default function Welcome() {
  const navigate = useNavigate();

  function handleNavigateSignUp() {
    navigate("/signUp");
  }

  function handleNavigateLogIn() {
    navigate("/logIn");
  }

  return (
    <div className="main">
      <div className="heading-text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Headhunter</span>
          <span className="heading-primary-sub">Intelligent recruiting</span>
        </h1>
      </div>

      <div className="interaction-text-box">
        <Button
          className={"clickable-welcome"}
          onHandleClick={handleNavigateSignUp}
        >
          Sign up
        </Button>
        <Button
          className={"clickable-welcome"}
          onHandleClick={handleNavigateLogIn}
        >
          Sign in
        </Button>
      </div>
    </div>
  );
}