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
  const [isActive, setIsActive] = useState(null);
  const [isAccountVisible, setIsAccountVisible] = useState(false);
  const [isJobsVisible, setIsJobsVisible] = useState(false);
  const [isAdminVisible, setIsAdminVisible] = useState(false);
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
          <S_AccountSvg
            src="/google-icons/account.svg"
            alt="account"
            $active={isActive === "1" ? "true" : "false"}
            onClick={() => {
              setIsActive("1");
              setIsAccountVisible(true);
              setIsAdminVisible(false);
              setIsJobsVisible(false);
            }}
          />
          {roles.includes("admin") && (
            <>
              <S_AdminSvg
                $active={isActive === "2" ? "true" : "false"}
                onClick={() => {
                  setIsActive("2");
                  setIsAccountVisible(false);
                  setIsAdminVisible(true);
                  setIsJobsVisible(false);
                }}
              />
              <S_ListSvg
                $active={isActive === "3" ? "true" : "false"}
                onClick={() => {
                  setIsActive("3");
                  setIsAccountVisible(false);
                  setIsAdminVisible(false);
                  setIsJobsVisible(true);
                }}
              />
            </>
          )}
          {roles.includes("user") && !roles.includes("admin") && (
            <S_ListSvg
              onClick={() => {
                setIsAccountVisible(false);
                setIsAdminVisible(false);
                setIsJobsVisible(true);
              }}
            />
          )}
          <S_LogoutSvg
            src="/google-icons/logout.svg"
            alt="logout"
            onClick={() => handleLogout()}
          />
        </S_SidebarBox>
        {/* {isAccountVisible && <Account />} */}
        {isAdminVisible && <Admin />}
        {isJobsVisible && <MyJobs />}
      </S_WindowSplit>
    </>
  );
}
