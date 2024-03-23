import styled from "styled-components";

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
// TODO - Remove margin left, doesn't used anymore?
const margin_left_from_table = "20px";
const table_width = "290px";

const compact_joblist = "150px";
const expanded_joblist = "auto";

export const S_JobList_Box = styled.div`
  margin-left: ${margin_left_from_table};
  margin-top: 10px;
  min-width: 200px;
`;

// export const S_JobList_Heading_MyJobs = styled.div`
//   font-size: 30px;
//   padding-bottom: 10px;
//   font-weight: bold;
// `;

export const S_JobList = styled.div`
  font-size: ${medium};
  &:hover {
    cursor: pointer;
    background: ${brighter};
  }
  padding: 10px;
  background-color: ${(props) =>
    props.$active === "true" ? `${brighter}` : `${neutral}`};
  /* &:hover {
    background: radial-gradient(at 50% 50%, ${darker}, ${darker});
  } */
  &:hover {
    background: ${dark};
    color: ${brightest};
  }
  border-radius: ${border_radius};
  color: ${(props) =>
    props.$active === "true" ? `${darkest}` : `${brightest}`};
  width: ${(props) =>
    props.$active === "true" ? `${expanded_joblist}` : `${compact_joblist}`};
`;

export const S_Button_AddJob = styled.button`
  font-size: ${medium};
  font-weight: bold;
  background-color: ${bright};
  color: ${darkest};
  &:hover {
    background-color: ${brightest};
    color: ${darkest};
  }
  margin-top: 10px;
  height: 40px;
  border-radius: ${border_radius};
  width: ${table_width};
`;

// All Preview
export const S_Preview = styled.div`
  margin-top: 10px;
  display: flex;
  /* width: 80%; */
`;
