import styled from "styled-components";

const border_radius = "5px";
const font_size = "20px";
const margin_left_from_table = "20px";
const table_width = "290px";

export const S_WindowSplit = styled.div`
  display: flex;
`;

export const S_JobList_Box = styled.div`
  margin-left: ${margin_left_from_table};
  margin-top: 10px;
`;

// export const S_JobList_Heading_MyJobs = styled.div`
//   font-size: 30px;
//   padding-bottom: 10px;
//   font-weight: bold;
// `;

export const S_JobList = styled.div`
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

export const S_Button_AddJob = styled.button`
  font-size: ${font_size};
  font-weight: bold;
  background-color: #fff0d9;
  &:hover {
    background-color: #f9d2b5;
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
