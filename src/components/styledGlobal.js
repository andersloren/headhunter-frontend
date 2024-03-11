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
