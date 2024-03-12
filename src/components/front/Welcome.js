// Libraris, functions, etc.
import { useState } from "react";

// Styled components
import {
  S_HeadingBox_Welcome,
  S_Title_Welcome,
  S_Subtitle_Welcome,
  S_Button,
  S_ButtonBox_Welcome,
} from "./styledFront.js";
import { S_Main, S_OpenAI_Badge, S_OpenAI_Box } from "../styledGlobal.js";

// Components
import SignUp from "./SignUp.js";
import Login from "./Login.js";

export default function Welcome({ setIsAuthorized }) {
  const [signUpVisible, setSignUpVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);

  function handleSignUp() {
    setSignUpVisible((vis) => !vis);
    setLoginVisible(false);
  }

  function handleLogin() {
    setLoginVisible((vis) => !vis);
    setSignUpVisible(false);
  }

  return (
    <S_Main>
      <S_HeadingBox_Welcome>
        <S_Title_Welcome>Headhunter</S_Title_Welcome>
        <S_Subtitle_Welcome>Intelligent recruiting</S_Subtitle_Welcome>
        <S_OpenAI_Box>
          <S_OpenAI_Badge
            src="../static/powered-by-openai-badge-outlined-on-dark.svg"
            alt="Open AI Logo"
          />
        </S_OpenAI_Box>
      </S_HeadingBox_Welcome>

      <S_ButtonBox_Welcome>
        <S_Button
          key={1}
          $right={"true"}
          onClick={() => handleSignUp()}
          $active={signUpVisible ? "true" : "false"}
        >
          Sign Up
        </S_Button>
        <S_Button
          key={2}
          $left={"true"}
          onClick={() => handleLogin()}
          $active={loginVisible ? "true" : "false"}
        >
          Log In
        </S_Button>
      </S_ButtonBox_Welcome>
      {signUpVisible && (
        <SignUp
          setLoginVisible={setLoginVisible}
          setSignUpVisible={setSignUpVisible}
        />
      )}
      {loginVisible && <Login setIsAuthorized={setIsAuthorized} />}
    </S_Main>
  );
}
