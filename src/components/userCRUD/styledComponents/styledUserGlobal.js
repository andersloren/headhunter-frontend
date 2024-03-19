import styled from "styled-components";

const border_radius = "5px";
const color = "#fff0d9";

export const S_FunctionalityButton_Box = styled.div``;

export const S_FunctionalityButton = styled.button`
  margin-top: 15px;
  font-size: 25px;
  color: ${color};
  height: 50px;
  width: 50px;
  border-radius: ${border_radius};
  background-color: #f9d2b5;
  &:hover {
    background: radial-gradient(at 50% 50%, #fff0d9, rgb(214, 143, 112));
  }
  opacity: ${(props) => (props.$blur === "true" ? "0.3" : "1")};
`;

export const S_JobEdit_And_Ad_Box = styled.div`
  margin-left: 20px;
`;

export const S_PreviewBox = styled.div`
  display: flex;
`;

export const S_Header = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 35px;
  color: #fff0d9;
`;
