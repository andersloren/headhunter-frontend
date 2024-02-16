// Libraris, functions, etc.
import {
  S_Main,
  S_HeadingBox,
  S_Title,
  S_Subtitle,
  S_Button,
  S_ButtonBox_Welcome,
} from "./styledComponents.js";

import SignUp from "./SignUp.js";
import { useState } from "react";
import Login from "./Login.js";

// Styled components

export default function Welcome() {
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
      <S_HeadingBox>
        <S_Title>Headhunter</S_Title>
        <S_Subtitle>Intelligent recruiting</S_Subtitle>
      </S_HeadingBox>

      <S_ButtonBox_Welcome>
        <S_Button
          key={1}
          $right={"20px"}
          onClick={() => handleSignUp()}
          $active={signUpVisible ? "true" : "false"}
        >
          Sign Up
        </S_Button>
        <S_Button
          key={2}
          $left={"20px"}
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
      {loginVisible && <Login />}
    </S_Main>
  );
}
