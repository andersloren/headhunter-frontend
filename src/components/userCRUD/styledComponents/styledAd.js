import styled from "styled-components";

const border_radius = "5px";
const font_size = "20px";
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
    props.$active === "true" ? "#fff0d9" : "rgb(214, 143, 112)"};
  line-height: ${(props) => (props.$active === "true" ? "3rem" : "")};
  border-radius: ${border_radius};
  &:hover {
    background: radial-gradient(at 50% 50%, #fff0d9, #c08065);
  }
`;

export const S_Iframe = styled.iframe`
  border-radius: ${border_preview_border_radius};
  border: ${border_preview_border};
  background-color: white;
  resize: both;
  min-width: 600px;
  box-shadow: 10px 5px 5px #c0806580;
`;
