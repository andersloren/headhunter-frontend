import { useEffect, useState } from "react";
import { extractUsernameFromToken } from "../security/token/extractUsernameFromToken";
import { extractRolesFromToken } from "../security/token/extractRolesFromToken";
import {
  S_WindowSplit,
  S_SidebarBox,
  S_HeadhunterLogoBox,
  S_HeadhunterLogo,
  S_OptionBox,
  S_Option,
  S_LogoutSvg,
  S_AdminSvg,
  S_AccountSvg,
  S_ListSvg,
} from "./styledComponents/styledSidebar";

import MyJobs from "../userCRUD/MyJobs";

import Admin from "../adminCRUD/Admin";

export default function Sidebar({ setIsAuthorized }) {
  const [isMyJobsVisible, setIsMyJobsVisible] = useState(false);
  const [isAdminVisible, setAdminVisible] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const [username, setUsername] = useState("");
  const [roles, setRoles] = useState([""]);

  function handleLogout() {
    localStorage.removeItem("headhunter-token");
    setIsAuthorized(false);
  }

  useEffect(() => {
    setUsername(extractUsernameFromToken());
  }, []);

  useEffect(() => {
    setUsername(extractUsernameFromToken());
  }, [username]);

  useEffect(() => {
    setRoles(extractRolesFromToken());
  }, []);

  return (
    <>
      <S_WindowSplit>
        <S_SidebarBox>
          <S_HeadhunterLogoBox>
            <S_HeadhunterLogo src="./static/headhunter-logo.png"></S_HeadhunterLogo>
          </S_HeadhunterLogoBox>
          <S_AccountSvg src="/google-icons/account.svg" alt="account" />
          {roles.includes("admin") && isAdmin ? (
            <S_AdminSvg onClick={() => setIsAdmin((is) => !is)} />
          ) : (
            <S_ListSvg onClick={() => setIsAdmin((is) => !is)} />
          )}
          <S_LogoutSvg
            src="/google-icons/logout.svg"
            alt="logout"
            onClick={() => handleLogout()}
          />
        </S_SidebarBox>

        {isAdmin ? <Admin /> : <MyJobs />}
        {roles.includes("user") && !roles.includes("admin") && <MyJobs />}
      </S_WindowSplit>
    </>
  );
}
