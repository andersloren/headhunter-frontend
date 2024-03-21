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
const font_size = "20px";
const margin_left_from_table = "20px";
const topButtonsHeight = "34px";

const border_preview_border = "2px solid";
const border_preview_border_radius = "5px 0px 0px 5px";
const table_width = "290px";

export const S_TopButtons_Box = styled.div`
  height: ${topButtonsHeight};
`;
export const S_Buttons_Edit = styled.button`
  height: ${topButtonsHeight};
  font-size: ${font_size};
  width: auto;
  background-color: ${(props) =>
    // props.$active === "true" ? `${bright}` : `${dark}`};
    props.$active === "true" ? `${brighter}` : `${neutral}`};
  line-height: ${(props) => (props.$active === "true" ? "3rem" : "")};
  border-radius: ${border_radius};
  &:hover {
    background: radial-gradient(at 50% 50%, ${bright}, ${darker});
  }
`;

export const S_Iframe = styled.iframe`
  border-radius: ${border_preview_border_radius};
  border: ${border_preview_border};
  background-color: white;
  resize: both;
  min-width: 600px;
`;
