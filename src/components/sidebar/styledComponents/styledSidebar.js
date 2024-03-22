import styled from "styled-components";

import { ReactComponent as PinSvg } from "../../utils/icons/pin.svg";
import { ReactComponent as UnpinSvg } from "../../utils/icons/unpin.svg";

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

const compact_sidebar = "100px";
const expanded_sidebar = "300px";

export const S_WindowSplit = styled.div`
  display: flex;
`;

export const S_SidebarBox = styled.div`
  min-height: 100vh;
  width: ${(props) =>
    props.$active === "true" ? `${expanded_sidebar}` : `${compact_sidebar}`};
  background-color: ${bright};
  &:hover {
    width: ${expanded_sidebar};
  }
`;

export const S_HeadhunterLogoBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;

export const S_HeadhunterLogo = styled.img`
  width: 60px;
`;

export const S_PinSvg = styled(PinSvg)`
  fill: ${brighter};
  width: 30px;
  height: 25px;
  fill: ${brightest};
  &:hover {
    cursor: pointer;
    fill: ${brightest};
  }
`;

export const S_UnpinSvg = styled(S_PinSvg)``;
