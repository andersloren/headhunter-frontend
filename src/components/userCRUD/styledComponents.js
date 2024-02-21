import styled from "styled-components";

const border_radius = "15px";
const font_size = "20px";
const color = "#fff0d9";
const margin_left_from_screen = "30px";
const margin_left_from_table = "20px";

const border_preview_border = "2px solid";
const border_preview_border_radius = "5px 0px 0px 5px";

// All Heading
export const S_HeadingBox_MyJobs = styled.h1`
  /* justify-content: center; */
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

export const S_Table_Box_MyJobs = styled.div``;

// All Table
export const S_Table_MyJobs = styled.table`
  width: 290px;
  margin-left: ${margin_left_from_screen};
  font-size: ${font_size};
`;

export const S_Table_Headers_MyJobs = styled.th`
  padding: 10px;
  font-size: 30px;
  font-weight: bold;
  padding-right: ${(props) => (props.$firstChild === "true" ? "50px" : "0px")};
`;

export const S_Table_Rows_MyJobs = styled.tr`
  &:hover {
    cursor: pointer;
    background: #fff0d9;
    /* border: 2px solid;
    border-color: #c08065;
    border-radius: ${border_radius};
    background: radial-gradient(at 50% 50%, #fff0d9, #c08065); */
  }
`;

export const S_Table_Data_MyJobs = styled.td`
  white-space: nowrap;
  /* margin-bottom: 40px; */
  padding: 10px;
  background-color: ${(props) =>
    props.$active === "true" ? "#fff0d9" : "rgb(214, 143, 112)"};
  &:hover {
    background: radial-gradient(at 50% 50%, #fff0d9, rgb(214, 143, 112));
  }
  border-radius: 5px;
`;

// All Preview
export const S_Preview_MyJobs = styled.div`
  width: 80%;
`;

export const S_Button_AddJob_MyJobs = styled.button`
  font-size: ${font_size};
  font-weight: bold;
  background-color: #78ff86;
  &:hover {
    background-color: #00ff19;
  }

  margin-top: 10px;
  margin-left: ${margin_left_from_screen};
  width: 290px;
  height: 40px;
  border-radius: ${border_radius};
`;

export const S_Button_Squared = styled.button`
  font-size: 40px;
  color: ${color};
  height: 70px;
  width: 70px;
  border-radius: 5px;
  /* background: rgb(214, 143, 112); */
  &:hover {
    background: radial-gradient(at 50% 50%, #fff0d9, rgb(214, 143, 112));
  }
  margin-left: ${(props) =>
    props.$firstChild === "true" ? margin_left_from_table : "0px"};
`;

export const S_PreviewBox_Preview = styled.div`
  display: flex;
`;

export const S_Buttons_Edit_Preview = styled.button`
  font-size: ${font_size};
  margin-left: ${(props) =>
    props.$firstChild === "true" ? margin_left_from_table : "0px"};
  width: auto;
  background-color: ${(props) =>
    props.$active === "true" ? "#fff0d9" : "rgb(214, 143, 112)"};
  line-height: ${(props) => (props.$active === "true" ? "3rem" : "")};
  border-radius: 5px;
  &:hover {
    background: radial-gradient(at 50% 50%, #fff0d9, #c08065);
  }
`;

export const S_TextArea_Preview = styled.textarea`
  box-shadow: 10px 5px 5px #c0806580;
  border-radius: ${border_preview_border_radius};
  border: ${border_preview_border};

  margin-left: ${margin_left_from_table};
  padding: 20px;
  width: 392px;
`;

export const S_Iframe_Preview = styled.iframe`
  border-radius: ${border_preview_border_radius};
  border: ${border_preview_border};
  background-color: white;
  margin-left: 20px;
  resize: both;

  box-shadow: 10px 5px 5px #c0806580;
  /* border: solid; */
`;
