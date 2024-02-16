import styled from "styled-components";

const borde_radius = "15px";
const font_size = "25px";
const color = "#fff0d9";

export const S_Main = styled.div`
  font-family: "Montserrat", sans-serif;
  background-color: green;
`;

export const S_HeadingBox = styled.h1`
  position: absolute;
  font-family: "Merriweather", sans-serif;
  top: 20%;
  left: 50%;
  transform: translate(-50%);
  text-transform: uppercase;
`;

export const S_Title = styled.div`
  display: block;
  position: relative;
  font-size: 70px;
  font-weight: 700;
  letter-spacing: 20px;
  margin-bottom: 8px;
  color: ${color};
  text-align: justify;
`;

// const ratio =

export const S_Subtitle = styled(S_Title)`
  font-size: 35px;
  font-weight: 400;
  letter-spacing: 10.5px;
`;

export const S_ButtonBox = styled.div`
  position: absolute;
  left: 50%;
  color: #{color};
  font-size: ${font_size};
`;

export const S_ButtonBox_Welcome = styled(S_ButtonBox)`
  top: 44%;
  transform: translateX(-56%);
`;

export const S_ButtonBox_SignUp = styled(S_ButtonBox)`
  top: 110%;
  transform: translateX(-50%);
`;

export const S_ButtonBox_Login = styled(S_ButtonBox)`
  top: 120%;
  transform: translateX(-50%);
`;

export const S_Button = styled.button`
  margin-left: ${(props) => (props.left ? props.left : "0px")};
  margin-right: ${(props) => (props.right ? props.right : "0px")};
  background: ${(props) =>
    props.active
      ? "radial-gradient(at 50% 50%, rgb(214, 143, 112), #f9d2b5)"
      : "rgba(0, 0, 0, 0.1)"};
  padding: 15px;
  color: ${color};
  border-color: rgb(223, 223, 223);
  border: 2px solid;
  border-radius: ${borde_radius};
  &:hover {
    background: radial-gradient(at 50% 50%, rgb(214, 143, 112), #f9d2b5);
    cursor: pointer;
  }
`;

export const S_Formbox = styled.div`
  position: absolute;
  font-size: ${font_size};
  width: 500px;
  top: 54%;
  left: 50%;
  transform: translate(-56%);
  /* color: black;
  background-color: white; */
`;

export const S_Input = styled.input`
  color: ${(props) => (props.color === "true" ? "#156429" : "#bc6640")};
  width: 100%;
  padding: 25px;
  background: #f0f0f0;
  border-radius: ${borde_radius};
  border: 0;
  font-weight: 600;
  margin: 15px 0px 0px 15px;
  /* color: rgb(214, 143, 112) ; */
`;

export const S_Check = styled.div`
  color: #156429;
  padding-left: 38px;
  margin: 2px;
  font-style: italic;
`;
