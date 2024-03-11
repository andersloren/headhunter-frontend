// Functions, libraries, etc.
import { useEffect, useState } from "react";
import { updateUser } from "./adminFunctions/updateUser";
import { findAllUsers } from "./adminFunctions/findAllUsers";
import { deleteUser } from "./adminFunctions/deleteUser";

// Styled components
import { S_Main, S_HeadingBox, S_Title } from "../styledGlobal";
import {
  S_Userlist_Table,
  S_UserList_Row,
  S_Userlist_Data,
  S_th,
  S_Table_Button,
  S_Form_FloatingDiv,
  S_Form_Button,
  S_Form_Input,
  S_Form_Button_Box,
} from "./styledAdmin";
import AdminForm from "./AdminForm";

export default function Admin() {
  const [userList, setUserList] = useState([]);
  const [isBlur, setIsBlur] = useState(false);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [roles, setRoles] = useState("");

  useEffect(() => {
    findAllUsers(setUserList);
  }, []);

  function handleDelete(email) {
    console.log("User deleted");
  }

  function handleUpdateUser(username, roles) {
    console.log("User updated:", username, ", ", roles);
  }

  return (
    <S_Main>
      <S_HeadingBox>
        <S_Title>Admin</S_Title>
      </S_HeadingBox>
      <S_Userlist_Table $blur={isBlur === true ? "true" : "false"}>
        <thead>
          <S_UserList_Row>
            <S_th>Functionality</S_th>
            <S_th>Email</S_th>
            <S_th>Username</S_th>
            <S_th>Roles</S_th>
          </S_UserList_Row>
        </thead>
        <tbody>
          {userList.map((user) => (
            <S_UserList_Row key={user.id}>
              <S_Userlist_Data>
                <S_Table_Button
                  onClick={() => {
                    if (!isBlur) {
                      setIsBlur(true);
                      setEmail(user.email);
                      setUsername(user.username);
                      setRoles(user.roles);
                    }
                  }}
                >
                  📝
                </S_Table_Button>
                <S_Table_Button
                  onClick={() => (isBlur ? "" : handleDelete(user.email))}
                >
                  ❌
                </S_Table_Button>
              </S_Userlist_Data>
              <S_Userlist_Data>{user.email}</S_Userlist_Data>
              <S_Userlist_Data>{user.username}</S_Userlist_Data>
              <S_Userlist_Data>{user.roles}</S_Userlist_Data>
            </S_UserList_Row>
          ))}
        </tbody>
      </S_Userlist_Table>
      <AdminForm />
      <S_Form_FloatingDiv $blur={isBlur === true ? "true" : "false"}>
        Update User Email
        <S_Form_Input value={email} readOnly></S_Form_Input>
        Username
        <S_Form_Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></S_Form_Input>
        Roles
        <S_Form_Input
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
    </S_Main>
  );
}
