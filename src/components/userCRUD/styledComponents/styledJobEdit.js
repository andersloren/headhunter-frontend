import { styled, keyframes } from "styled-components";

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

const border_radius = "5px";
const border_preview_border = "2px solid";
const border_preview_border_radius = "5px 0px 0px 5px";

export const S_Instruction_Input = styled.input`
  border-radius: ${border_radius};
  padding: 9px;
  width: 100%;
  background-color: ${brightest};
  font-size: ${medium};
`;

export const S_Instruction_DecisionButton = styled.button`
  margin-right: 30px;
  width: 70px;
  background-color: ${neutral};
  background: ${(props) =>
    props.$active === "true" ? `${brighter}` : `${neutral}`};
  padding: 12px;
  color: ${bright};
  border-color: ${brighter};
  border: 2px solid;
  border-radius: ${border_radius};
  &:hover {
    background: ${dark};
    cursor: pointer;
  }
`;

export const S_TextArea = styled.textarea`
  background-color: ${brightest};
  color: ${darkest};
  font-size: ${medium};
  border-radius: ${border_preview_border_radius};
  border: ${border_preview_border};
  min-width: 400px;
`;

export const S_Tooltip_FunctionalityButton = styled.div`
  margin-left: ${(props) =>
    props.$activeButton !== "3"
      ? props.$activeButton !== "2"
        ? "0px"
        : "70px"
      : "140px"};
  padding: 20px;
  width: 200px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${border_radius};
  border: 2px solid;
  background-color: ${bright};
`;

export const S_Animation_Text = styled.div`
  position: relative;
  text-align: center;
  font-size: ${big};
  color: ${bright};
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const S_Animation_Rotate = styled.div`
  margin-top: 30px;
  position: relative;
  text-align: center;
  font-size: 50px;
  animation: ${rotate} 5s linear infinite;
`;
