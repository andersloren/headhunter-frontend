// Libraris, functions, etc.
import { useState } from "react";

// Styled components
import {
  S_HeadingBox_Welcome,
  S_Title_Welcome,
  S_Subtitle_Welcome,
  S_Button,
  S_ButtonBox_Welcome,
} from "./styledComponents/styledFront";
import { S_OpenAI_Badge, S_OpenAI_Box } from "../utils/styledGlobal.js";

// Components
import SignUp from "./SignUp.js";
import Login from "./Login.js";

/**
 * This is the first component visible to a user. From here, the user can decide to sign up or login.
 *
 * States:
 * - 'signUpVisible': If true, child component shows below where user can sign up.
 * - 'loginVisible': If true, child component shows below where user can login.
 * @param {boolean} setIsAuthorized - If the user sends in matching email and password, isAuthorized is set to true.
 */

export default function Welcome({ setIsAuthorized }) {
  const [signUpVisible, setSignUpVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);

  /**
   * If the user clicks the button for signing up, signUpVisible becomes true and forms for signing up becomes visible.
   *
   * @function
   */

  function handleSignUp() {
    setSignUpVisible((vis) => !vis);
    setLoginVisible(false);
  }

  /**
   * If the user clicks the button for signing up, loginVisible becomes true and forms for logging in becomes visible.
   *
   * @function
   */

  function handleLogin() {
    setLoginVisible((vis) => !vis);
    setSignUpVisible(false);
  }

  return (
    <>
      {/**
       * App title
       */}
      <S_HeadingBox_Welcome>
        <S_Title_Welcome>Headhunter</S_Title_Welcome>
        <S_Subtitle_Welcome>Intelligent recruiting</S_Subtitle_Welcome>
        {/**
         * Open AI badge, must follow brand guidelines. Read more here: https://openai.com/brand
         */}
        <S_OpenAI_Box>
          <S_OpenAI_Badge
            src="../static/powered-by-openai-badge-outlined-on-dark.svg"
            alt="Open AI Logo"
          />
        </S_OpenAI_Box>
      </S_HeadingBox_Welcome>

      {/**
       * Buttons for toggle the sign up component and the login component respectively.
       */}
      <S_ButtonBox_Welcome>
        <S_Button
          key={1}
          onClick={() => handleSignUp()}
          $active={signUpVisible ? "true" : "false"}
        >
          Sign Up
        </S_Button>
        <S_Button
          key={2}
          onClick={() => handleLogin()}
          $active={loginVisible ? "true" : "false"}
        >
          Log In
        </S_Button>
      </S_ButtonBox_Welcome>
      {/**
       * Sign up component
       */}
      {signUpVisible && (
        <SignUp
          setLoginVisible={setLoginVisible}
          setSignUpVisible={setSignUpVisible}
        />
      )}
      {/**
       * Login component
       */}
      {loginVisible && <Login setIsAuthorized={setIsAuthorized} />}
    </>
  );
}
