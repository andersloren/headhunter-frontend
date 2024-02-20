import styled from "styled-components";

const border_radius = "15px";
const font_size = "20px";
const color = "#fff0d9";
const margin_left_from_screen = "30px";

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
  /* margin-bottom: 40px; */
  padding-top: 10px;
  padding-bottom: 10px;
`;

// All Preview
export const S_Preview_MyJobs = styled.div`
  width: 80%;
`;
export const S_Button_Squared = styled.button`
  color: ${color};
  height: 40px;
  width: 40px;
  background: #c08065;
  &:hover {
    background: radial-gradient(at 50% 50%, #c0806550, #fff0d9);
  }
`;

export const S_Iframe_Preview = styled.iframe`
  margin-left: 20px;
  resize: both;
`;
