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
const margin_between_buttons = "20px";
const inputfield_width = 300;
const inputfield_translateX = (inputfield_width / 2) * -1;

export const S_HeadingBox_Welcome = styled.div`
  padding-top: 150px;
  font-family: Merriweather, sans-serif;
  text-transform: uppercase;
`;

export const S_Title_Welcome = styled.h1`
  font-size: ${biggest};
  font-weight: 700;
  letter-spacing: 20px;
  margin-right: -20px;
  margin-bottom: 8px;
  color: ${brightest};
  text-align: justify;
  text-align: center;
  vertical-align: text-bottom;
`;

export const S_Subtitle_Welcome = styled(S_Title_Welcome)`
  font-size: ${bigger};
  font-weight: 400;
  letter-spacing: 10.5px;
`;

export const S_ButtonBox = styled.div`
  position: relative;
  justify-content: center;
`;

export const S_ButtonBox_Welcome = styled(S_ButtonBox)`
  left: 50%;
  transform: translate(-50%);
  margin-top: 60px;
  width: 250px;
`;

export const S_ButtonBox_Submit = styled(S_ButtonBox)`
  margin-top: 25px;
  left: 50%;
  transform: translate(-25%);
  width: 250px;
`;

export const S_Button = styled.button`
  font-size: ${medium};
  width: 100px;
  padding: 12px;
  margin-left: ${(props) => (props.$left ? margin_between_buttons : "0px")};
  margin-right: ${(props) => (props.$right ? margin_between_buttons : "0px")};

  background-color: ${(props) =>
    props.$active === "true" ? `${brightest}` : `${neutral}`};
  color: ${(props) =>
    props.$active === "true" ? `${darkest}` : `${brightest}`};

  border-color: ${(props) =>
    props.$active === "true" ? `${brightest}` : `${brightest}`};
  /* border: 2px ${bright} solid; */
  border: ${(props) =>
    props.$active === "true"
      ? `2px ${darkest} solid`
      : `2px ${brightest} solid`};
  border-radius: ${border_radius};

  &:hover {
    background: ${brighter};
    cursor: pointer;
    color: ${darkest};
    border: 2px ${darkest} solid;
  }
`;

export const S_FormBox = styled.div`
  /* display: inline-block; */
  position: absolute;
  font-size: ${medium};
  /* width: 30%; */
  top: 510px;
  left: 50%;
  transform: translateX(${inputfield_translateX}px);
`;

export const S_InputFlex = styled.div`
  display: flex;
  /* justify-content: flex-start; */
`;

export const S_Input = styled.input`
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
