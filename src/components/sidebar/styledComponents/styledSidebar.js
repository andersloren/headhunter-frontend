import styled from "styled-components";
import { ReactComponent as LogoutSvg } from "../../utils/icons/logout.svg";
import { ReactComponent as AdminSvg } from "../../utils/icons/admin.svg";
import { ReactComponent as AccountSvg } from "../../utils/icons/account.svg";
import { ReactComponent as ListSvg } from "../../utils/icons/list.svg";

import {
  brightest,
  brighter,
  bright,
  neutral,
  dark,
  darker,
  darkest,
  big,
  medium,
  small,
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
`;

export const S_HeadhunterLogoBox = styled.div`
  margin: 20px;
`;

export const S_HeadhunterLogo = styled.img`
  width: 60px;
`;

export const S_OptionBox = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const S_Option = styled.div`
  margin-bottom: 10px;
  background-color: ${bright};
  font-size: ${medium};
  color: ${brightest};
  &:hover {
    background-color: ${brightest};
    color: ${dark};
    cursor: pointer;
  }
  border-radius: ${border_radius};
  margin: 10px;
  padding: 10px;
`;

export const S_AccountSvg = styled(AccountSvg)`
  width: 50px;
  height: 50px;
  fill: ${brightest};
  &:hover {
    background: ${brightest};
    fill: ${dark};
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
    fill: ${dark};
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
    fill: ${dark};
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
    fill: ${dark};
    cursor: pointer;
  }
  border-radius: ${border_radius};
  padding: 10px;
  margin: 10px;
`;
