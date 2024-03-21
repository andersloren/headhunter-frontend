import { useState } from "react";
import { S_WindowSplit, S_SidebarBox } from "./styledComponents/styledSidebar";

import MyJobs from "../userCRUD/MyJobs";

import Admin from "../adminCRUD/Admin";

export default function Sidebar({ roles, setIsAuthorized }) {
  const [isMyJobsVisible, setIsMyJobsVisible] = useState(false);
  const [isAdminVisible, setAdminVisible] = useState(false);

  function handleLogout() {
    localStorage.removeItem("headhunter-token");
    setIsAuthorized(false);
  }

  return (
    <>
      <S_WindowSplit>
        <S_SidebarBox>
          <div>Sidebar</div>
          <div>username</div>
          <div>Logout</div>
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
