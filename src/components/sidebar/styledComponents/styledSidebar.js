import styled from "styled-components";
import { ReactComponent as LogoutSvg } from "../../utils/icons/logout.svg";
import { ReactComponent as AdminSvg } from "../../utils/icons/admin.svg";
import { ReactComponent as AccountSvg } from "../../utils/icons/account.svg";
import { ReactComponent as ListSvg } from "../../utils/icons/list.svg";
import { ReactComponent as NextSvg } from "../../utils/icons/next.svg";
import { ReactComponent as BeforeSvg } from "../../utils/icons/before.svg";

import {
  brightest,
  brighter,
  bright,
  neutral,
  dark,
  darker,
  darkest,
} from "../../utils/styledComponentsConstants";

const border_radius = "15px";

export const S_WindowSplit = styled.div`
  display: flex;
`;

export const S_SidebarBox = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${bright};
  transition: width 0.3s ease-in-out;
  position: relative;
`;

export const S_HeadhunterLogoBox = styled.div`
  margin: 20px;
`;

export const S_HeadhunterLogo = styled.img`
  width: 60px;
`;

export const S_NavigationIcons = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const S_AccountSvg = styled(AccountSvg)`
  width: 50px;
  height: 50px;
  fill: ${brightest};
  &:hover {
    background: ${brightest};
    fill: ${darker};
    cursor: pointer;
  }
  border-radius: ${border_radius};
  padding: 10px;
  margin: 10px;
  background-color: ${(props) =>
    props.$active === "true" ? `${brightest}` : `${bright}`};
  fill: ${(props) => (props.$active === "true" ? `${darker}` : `${brightest}`)};
`;

export const S_AdminSvg = styled(AdminSvg)`
  width: 50px;
  height: 50px;
  fill: ${brightest};
  &:hover {
    background: ${brightest};
    fill: ${darker};
    cursor: pointer;
  }
  border-radius: ${border_radius};
  padding: 10px;
  margin: 10px;
  background-color: ${(props) =>
    props.$active === "true" ? `${brightest}` : `${bright}`};
  fill: ${(props) => (props.$active === "true" ? `${darker}` : `${brightest}`)};
`;

export const S_ListSvg = styled(ListSvg)`
  width: 50px;
  height: 50px;
  fill: ${brightest};
  &:hover {
    background: ${brightest};
    fill: ${darker};
    cursor: pointer;
  }
  border-radius: ${border_radius};
  padding: 10px;
  margin: 10px;
  background-color: ${(props) =>
    props.$active === "true" ? `${brightest}` : `${bright}`};
  fill: ${(props) => (props.$active === "true" ? `${darker}` : `${brightest}`)};
`;

export const S_LogoutSvg = styled(LogoutSvg)`
  width: 50px;
  height: 50px;
  fill: ${brightest};
  &:hover {
    background: ${brightest};
    fill: ${darker};
    cursor: pointer;
  }
  border-radius: ${border_radius};
  padding: 10px;
  margin: 10px;
`;
export const S_NextSvg = styled(NextSvg)`
  width: 30px;
  height: 30px;
  fill: ${brightest}; 
  &:hover {
    background: ${brightest};
    fill: ${dark};
    cursor: pointer;
  }
  border-radius: 50%;  // Add border-radius to create a circle
  padding: 5px;  // Adjust padding to center the icon within the circle
`;

export const S_BeforeSvg = styled(BeforeSvg)`
  width: 30px;
  height: 30px;
  fill: ${brightest}; 
  &:hover {
    background: ${brightest};
    fill: ${dark};
    cursor: pointer;
  }
  border-radius: 50%;  // Add border-radius to create a circle
  padding: 5px;  // Adjust padding to center the icon within the circle
`;