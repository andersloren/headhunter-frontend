import { ReactComponent as AddSvg } from "../../utils/icons/add.svg";
import { ReactComponent as DeleteSvg } from "../../utils/icons/delete.svg";
import { styled } from "styled-components";

import {
  brightest,
  brighter,
  bright,
  neutral,
  dark,
  darker,
  darkest,
} from "../../utils/colors/styledComponentsConstants";

const border_radius = "5px";

export const S_FunctionalityButton_Box = styled.div``;

export const S_FunctionalityButton = styled.button`
  margin-top: 15px;
  font-size: 25px;
  height: 50px;
  width: 50px;
  border-radius: ${border_radius};
  background-color: ${neutral};
  &:hover {
    background-color: ${dark};
  }
  opacity: ${(props) => (props.$blur === "true" ? "0.3" : "1")};
`;

export const S_JobEdit_And_Ad_Box = styled.div`
  margin-left: 20px;
`;

export const S_PreviewBox = styled.div`
  display: flex;
`;

export const S_Header = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 35px;
  color: ${brightest};
`;

export const S_AddSvg = styled(AddSvg)`
  width: 100%;
  height: 100%;
  fill: ${brightest};
`;

export const S_DeleteSvg = styled(DeleteSvg)`
  width: 100%;
  height: 100%;
  fill: ${brightest};
`;
