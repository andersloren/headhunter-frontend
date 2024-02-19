import styled from "styled-components";

const border_radius = "15px";
const font_size = "20px";
const color = "#fff0d9";

export const S_Main = styled.div`
  font-family: "Montserrat", sans-serif;
  background-color: green;
`;

export const S_HeadingBox_Welcome = styled.h1`
  justify-content: center;
  position: absolute;
  font-family: "Merriweather", sans-serif;
  top: 17%;
  left: 50%;
  transform: translate(-50%);
  text-transform: uppercase;
`;

export const S_Title_Welcome = styled.div`
  font-size: 70px;
  font-weight: 700;
  letter-spacing: 20px;
  margin-right: -20px;
  margin-bottom: 8px;
  color: ${color};
  text-align: justify;
`;

// const ratio =

export const S_Subtitle_Welcome = styled(S_Title_Welcome)`
  font-size: 35px;
  font-weight: 400;
  letter-spacing: 10.5px;
`;

export const S_ButtonBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  left: 50%;
  color: ${color};
  font-size: ${font_size};
`;

export const S_ButtonBox_Welcome = styled(S_ButtonBox)`
  top: 36%;
  transform: translateX(-56%);
`;

export const S_ButtonBox_SignUpSubmit = styled(S_ButtonBox)`
  top: 110%;
  transform: translateX(-50%);
`;

export const S_ButtonBox_LoginSubmit = styled(S_ButtonBox)`
  top: 120%;
  transform: translateX(-50%);
`;

export const S_Button = styled.button`
  margin-left: ${(props) => (props.$left ? props.$left : "0px")};
  margin-right: ${(props) => (props.$right ? props.$right : "0px")};
  background: ${(props) =>
    props.$active === "true"
      ? "radial-gradient(at 50% 50%, rgb(214, 143, 112), #f9d2b5)"
      : "rgba(0, 0, 0, 0.1)"};
  padding: 12px;
  color: ${color};
  border-color: rgb(223, 223, 223);
  border: 2px solid;
  border-radius: ${border_radius};
  &:hover {
    background: radial-gradient(at 50% 50%, rgb(214, 143, 112), #f9d2b5);
    cursor: pointer;
  }
`;

export const S_FormBox = styled.div`
  display: inline-block;
  position: absolute;
  width: 30%;
  font-size: ${font_size};
  top: 46%;
  left: 50%;
  transform: translateX(-50%);
`;

export const S_InputFlex = styled.div`
  display: flex;
  justify-content: center;
`;

export const S_Input = styled.input`
  color: ${(props) => (props.$color === "true" ? "#156429" : "#bc6640")};
  padding: 15px;
  background: #f0f0f0;
  border-radius: ${border_radius};
  border: 0;
  font-weight: 500;
  margin: 0px 0px 15px 15px;
`;

export const S_Check = styled.div`
  transform: translateY(10%);
  margin-left: 10px;
  font-size: 40px;
  color: ${(props) =>
    props.$approved === "true" ? "#156429" : "rgb(214, 143, 112)"};
`;

export const S_FormatConfirm = styled.div`
  color: #156429;
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding-left: 38px;
  margin: 3px 2px 1px;
  font-style: italic;
`;
