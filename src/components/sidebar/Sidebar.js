import { useEffect, useState } from "react";
import { extractUsernameFromToken } from "../security/token/extractUsernameFromToken";
import { extractRolesFromToken } from "../security/token/extractRolesFromToken";
import {
  S_WindowSplit,
  S_SidebarBox,
  S_HeadhunterLogoBox,
  S_LogoutSvg,
  S_AdminSvg,
  S_AccountSvg,
  S_ListSvg,
  S_CollapsedSvg,
  S_ExpandedSvg,
  S_HeadhunterSvg,
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
  const [isExpanded, setIsExpanded] = useState(false);

  function handleLogout() {
    localStorage.removeItem("headhunter-token");
    setIsAuthorized(false);
  }

  useEffect(() => {
    setUsername(extractUsernameFromToken());
    setRoles(extractRolesFromToken());
  }, []);

  return (
    <S_WindowSplit>
      <S_SidebarBox $isExpanded={isExpanded === true ? "true" : "false"}>
        <S_HeadhunterLogoBox>
          <S_HeadhunterSvg />
        </S_HeadhunterLogoBox>
        <S_AccountSvg
          $active={isActive === "3" ? "true" : "false"}
          onClick={() => {
            setIsActive("3");
            setIsAccountVisible(true);
            setIsAdminVisible(false);
            setIsJobsVisible(false);
          }}
        />
        {roles.includes("admin") && (
          <>
            <S_AdminSvg
              $active={isActive === "4" ? "true" : "false"}
              onClick={() => {
                setIsActive("4");
                setIsAccountVisible(false);
                setIsAdminVisible(true);
                setIsJobsVisible(false);
              }}
            />
            <S_ListSvg
              $active={isActive === "5" ? "true" : "false"}
              onClick={() => {
                setIsActive("5");
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
        <S_LogoutSvg onClick={handleLogout} />
      </S_SidebarBox>
      {isAdminVisible && <Admin />}
      {isJobsVisible && <MyJobs />}
    </S_WindowSplit>
  );
}
