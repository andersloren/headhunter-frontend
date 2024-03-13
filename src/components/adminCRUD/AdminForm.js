// Functions, libraries, etc
import { updateUser } from "./adminFunctions/updateUser";
import { findUserByEmail } from "./adminFunctions/findUserByEmail";

// Styled components
import {
  S_Form_FloatingDiv,
  S_Form_Header,
  S_Form_Button,
  S_Form_Input,
  S_Form_Button_Box,
} from "./styledAdmin";
import { useEffect, useState } from "react";

// Component
export default function AdminForm({
  setIsBlur,
  isBlur,
  email,
  handleUserCRUDSuccess,
}) {
  const [username, setUsername] = useState("");
  const [roles, setRoles] = useState("");

  useEffect(() => {
    findUserByEmail(email, setUsername, setRoles);
  }, [email]);

  function handleUpdateUser(username, roles) {
    updateUser(email, username, roles, handleUserCRUDSuccess, setIsBlur);
  }

  return (
    <>
      <S_Form_FloatingDiv
        $blur={isBlur === true ? "true" : "false"}
        type="email"
      >
        <S_Form_Header>Update User</S_Form_Header>
        Email
        <S_Form_Input value={email} readOnly></S_Form_Input>
        Username
        <S_Form_Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></S_Form_Input>
        Roles
        <S_Form_Input
          type="text"
          value={roles}
          onChange={(e) => setRoles(e.target.value)}
        ></S_Form_Input>
        <S_Form_Button_Box>
          <S_Form_Button
            onClick={() => handleUpdateUser(username, roles, email)}
            $right={"true"}
          >
            💾
          </S_Form_Button>
          <S_Form_Button onClick={() => setIsBlur(false)} $left={"true"}>
            🔙
          </S_Form_Button>
        </S_Form_Button_Box>
      </S_Form_FloatingDiv>
    </>
  );
}
