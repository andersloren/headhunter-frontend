import { useState } from "react";
import { S_WindowSplit, S_SidebarBox } from "./styledSidebar";

import MyJobs from "../userCRUD/MyJobs";

import Admin from "../adminCRUD/Admin";

export default function Sidebar({ roles }) {
  const [isMyJobsVisible, setIsMyJobsVisible] = useState(false);
  const [isAdminVisible, setAdminVisible] = useState(false);

  return (
    <>
      <S_WindowSplit>
        <S_SidebarBox>
          <div>Sidebar</div>
          <div>username</div>
          <div>Logout</div>
          {roles.includes("user") && (
            <button onClick={() => setIsMyJobsVisible((vis) => !vis)}>
              Show MyJobs
            </button>
          )}
          {roles.includes("admin") && (
            <button onClick={() => setAdminVisible((vis) => !vis)}>
              Show Admin
            </button>
          )}
        </S_SidebarBox>
        {isMyJobsVisible && <MyJobs />}
        {isAdminVisible && <Admin />}
      </S_WindowSplit>
    </>
  );
}
