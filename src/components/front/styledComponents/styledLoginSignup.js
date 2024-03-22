import styled from "styled-components";

import {
  brightest,
  brighter,
  bright,
  neutral,
  dark,
  darker,
  darkest,
  biggest,
  bigger,
  big,
  medium,
  small,
} from "../../utils/styledComponentsConstants";

const border_radius = "15px";
const inputfield_width = 300;
const inputfield_translateX = (inputfield_width / 2) * -1;

export const S_LoginError = styled.div`
  background-color: red;
`;

export const S_FormBox = styled.div`
  position: flex;
  margin-top: 20px;
  position: absolute;
  font-size: ${medium};
  top: 510px;
  left: 50%;
  /* transform: translateX(${inputfield_translateX}px); */
  transform: translateX(-50%);
`;

export const S_Input = styled.input`
  display: flex;
  &::placeholder {
    color: ${dark};
  }
  color: ${(props) => (props.$color === "true" ? "#156429" : `${darkest}`)};
  padding: 15px;
  background: ${brightest};
  border-radius: ${border_radius};
  border: 0;
  font-weight: 500;
  margin: 0px 0px 15px 0px;
  width: ${inputfield_width} "px";
`;

export const S_Check = styled.div`
  position: static;
  transform: translateY(10%);
  margin-left: 10px;
  font-size: 40px;
  color: ${brightest};
`;

export const S_EmailIsNotAvailable = styled.div`
  transform: translateY(10%);
  margin-left: 10px;
  font-size: ${medium};
  color: ${brightest};
`;

export const S_FormatConfirm = styled.div`
  color: #156429;
  font-family: "Courier New", Courier, monospace;
  font-size: ${medium};
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding-left: 38px;
  margin: 3px 2px 1px;
  font-style: italic;
`;

export const S_ButtonBox_Submit = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  margin-top: 25px;
  left: 50%;
  transform: translate(-50%);
  width: 250px;
`;
