// Functions, libraries, etc.
import { useEffect, useState } from "react";
import { deleteUser } from "./adminFunctions/deleteUser";

import { findAllUsers } from "./adminFunctions/findAllUsers";

// Styled components
import { S_Main, S_HeadingBox, S_Title } from "../styledGlobal";
import {
  S_Userlist_Table,
  S_UserList_Row,
  S_Userlist_Data,
  S_th,
  S_Table_Button,
  S_User_Box,
} from "./styledAdmin";
import AdminForm from "./AdminForm";

export default function Admin() {
  const [userList, setUserList] = useState([]);
  const [isBlur, setIsBlur] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const [refreshUserTable, setRefreshUserTable] = useState(false);

  useEffect(() => {
    findAllUsers(setUserList);
  }, []);

  useEffect(() => {
    findAllUsers(setUserList);
  }, [refreshUserTable]);

  function handleDelete(email) {
    deleteUser(email);
  }

  function handleUserCRUDSuccess() {
    setRefreshUserTable((refresh) => !refresh);
  }

  return (
    <>
      <S_Main>
        <S_User_Box>
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
              {userList.map((user, index) => (
                <S_UserList_Row key={index}>
                  <S_Userlist_Data>
                    <S_Table_Button
                      onClick={() => {
                        if (!isBlur) {
                          setIsBlur(true);
                          setUserEmail(user.email);
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
          {isBlur && (
            <AdminForm
              email={userEmail}
              isBlur={isBlur}
              setIsBlur={setIsBlur}
              handleUserCRUDSuccess={handleUserCRUDSuccess}
            />
          )}
        </S_User_Box>
      </S_Main>
    </>
  );
}
