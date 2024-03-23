import { useEffect, useState } from "react";
import { extractUsernameFromToken } from "../security/token/extractUsernameFromToken";
import {
  S_WindowSplit,
  S_SidebarBox,
  S_PinSvg,
  S_UnpinSvg,
  S_HeadhunterLogoBox,
  S_HeadhunterLogo,
  S_OptionBox,
  S_Option,
} from "./styledComponents/styledSidebar";

import MyJobs from "../userCRUD/MyJobs";

import Admin from "../adminCRUD/Admin";

export default function Sidebar({ roles, setIsAuthorized }) {
  const [isMyJobsVisible, setIsMyJobsVisible] = useState(false);
  const [isAdminVisible, setAdminVisible] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const [username, setUsername] = useState("");

  function handleLogout() {
    localStorage.removeItem("headhunter-token");
    setIsAuthorized(false);
  }

  useEffect(() => {
    setUsername(extractUsernameFromToken());
  }, []);

  console.log(isPinned);

  return (
    <>
      <S_WindowSplit>
        <S_SidebarBox $active={isPinned === false ? "true" : "false"}>
          <S_HeadhunterLogoBox>
            <S_HeadhunterLogo src="./static/headhunter-logo.png"></S_HeadhunterLogo>
            {isPinned ? (
              <S_UnpinSvg
                src="/google-icons/unpin.svg"
                alt="unpin"
                onClick={() => setIsPinned((pin) => !pin)}
              />
            ) : (
              <S_PinSvg
                src="/google-icons/pin.svg"
                alt="pin"
                onClick={() => setIsPinned((pin) => !pin)}
              />
            )}
          </S_HeadhunterLogoBox>
          <S_OptionBox>
            <S_Option>{username}</S_Option>
            <S_Option>Logout</S_Option>
          </S_OptionBox>
          <p></p>
          {roles.includes("user") && (
            <button onClick={() => setIsMyJobsVisible((vis) => !vis)}>
              Show MyJobs
            </button>
          )}
          <p></p>
          {roles.includes("admin") && (
            <button onClick={() => setAdminVisible((vis) => !vis)}>
              Show Admin
            </button>
          )}
          <p></p>
          <button onClick={() => handleLogout()}>Logout</button>
        </S_SidebarBox>
        {isMyJobsVisible && <MyJobs />}
        {isAdminVisible && <Admin />}
      </S_WindowSplit>
    </>
  );
}
