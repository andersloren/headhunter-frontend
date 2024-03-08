import styled from "styled-components";

const border_radius = "5px";
const font_size = "20px";
const color = "#fff0d9";
const margin_left_from_screen = "30px";
const margin_left_from_box = margin_left_from_screen;
const margin_left_from_table = "20px";

const border_preview_border = "2px solid";
const border_preview_border_radius = "5px 0px 0px 5px";
const table_width = "290px";

// All Heading
export const S_HeadingBox_MyJobs = styled.h1`
  font-family: "Merriweather", sans-serif;
  margin-bottom: 40px;
`;

export const S_Title_MyJobs = styled.div`
  font-size: 35px;
  font-weight: 400;
  margin-left: ${margin_left_from_screen};
  letter-spacing: 4px;
  color: ${color};
`;

export const S_WindowSplit_MyJobs = styled.div`
  display: flex;
`;

// All Jobs
export const S_JobList_Box_MyJobs = styled.div`
  margin-left: ${margin_left_from_table};
  margin-top: 10px;
`;

export const S_JobList_Heading_MyJobs = styled.div`
  font-size: 30px;
  padding-bottom: 10px;
  font-weight: bold;
`;

export const S_JobList_Jobs_MyJobs = styled.div`
  font-size: ${font_size};
  &:hover {
    cursor: pointer;
    background: #fff0d9;
  }
  padding: 10px;
  background-color: ${(props) =>
    props.$active === "true" ? "#fff0d9" : "rgb(214, 143, 112)"};
  &:hover {
    background: radial-gradient(at 50% 50%, #fff0d9, rgb(214, 143, 112));
  }
  border-radius: ${border_radius};
`;

export const S_Button_AddJob_MyJobs = styled.button`
  font-size: ${font_size};
  font-weight: bold;
  background-color: #fff0d9;
  &:hover {
    background-color: #78ff86;
  }
  margin-top: 10px;
  height: 40px;
  border-radius: ${border_radius};
  width: ${table_width};
`;

// All Preview
export const S_Preview_MyJobs = styled.div`
  margin-top: 10px;
  display: flex;
  /* width: 80%; */
`;

export const S_FunctionalityButton_Box_Preview = styled.div``;

export const S_FunctionalityButton_Preview = styled.button`
  font-size: 40px;
  color: ${color};
  height: 70px;
  width: 70px;
  border-radius: ${border_radius};
  background-color: #fff0d9;
  &:hover {
    background-color: radial-gradient(at 50% 50%, #fff0d9, rgb(214, 143, 112));
  }
`;

export const S_Tooltip_FunctionalityButton_Preview = styled.div`
  margin-left: ${(props) =>
    // (props.$activeButton === "1" ? "70px" : "0px")};
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
  background-color: #fff0d9;
`;

export const S_PreviewBox_Preview = styled.div`
  display: flex;
`;

export const S_Buttons_Edit_Preview = styled.button`
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

export const S_TextArea_Preview = styled.textarea`
  box-shadow: 10px 5px 5px #c0806580;
  border-radius: ${border_preview_border_radius};
  border: ${border_preview_border};
  width: 392px;
`;

export const S_Iframe_Preview = styled.iframe`
  border-radius: ${border_preview_border_radius};
  border: ${border_preview_border};
  background-color: white;
  resize: both;
  box-shadow: 10px 5px 5px #c0806580;
`;

export const S_JobEdit_And_Ad_Box = styled.div`
  margin-left: 20px;
`;
