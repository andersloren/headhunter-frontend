import styled from "styled-components";

const color = "#fff0d9";
const margin_left_from_screen = "30px";

// Main
export const S_Main = styled.div`
  font-family: "Montserrat", sans-serif;
`;

// All Heading
export const S_HeadingBox = styled.h1`
  font-family: "Merriweather", sans-serif;
  margin-bottom: 40px;
`;

export const S_Title = styled.div`
  font-size: 35px;
  font-weight: 400;
  margin-left: ${margin_left_from_screen};
  letter-spacing: 4px;
  color: ${color};
`;

export const S_OpenAI_Box = styled.div`
  width: auto;
  vertical-align: middle;
  left: 50%;
`;

export const S_OpenAI_Badge = styled.img`
  display: block;
  margin-top: 45px;
  margin-left: auto;
  margin-right: auto;
  /* margin: 32px; */
  height: 32px;
`;
