import { styled, keyframes } from "styled-components";

const border_radius = "5px";
const color = "#fff0d9";
const border_preview_border = "2px solid";
const border_preview_border_radius = "5px 0px 0px 5px";

export const S_Instruction_Input = styled.input`
  border-radius: ${border_radius};
  padding: 15px;
  background: #f0f0f0;
  background-color: #f9d2b5;
`;

export const S_Instruction_DecisionButton = styled.button`
  margin-right: 15px;
  width: 100px;
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

export const S_TextArea = styled.textarea`
  box-shadow: 10px 5px 5px #c0806580;
  border-radius: ${border_preview_border_radius};
  border: ${border_preview_border};
  min-width: 400px;
  background-color: #f9d2b5;
`;

export const S_Tooltip_FunctionalityButton = styled.div`
  margin-left: ${(props) =>
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

export const S_Animation_Text = styled.div`
  position: relative;
  text-align: center;
  font-size: 35px;
  color: #fff0d9;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const strafe = keyframes`
  from {
    transform: translate(0%);
  }
25% {
  transform: translate(30%);
}
  50% {
    transform: translate(0%);
  }
  75% {
    transform: translate(-30%);
  }
  to {
    transform: translate(0%);
  }
`;

export const S_Animation_Rotate = styled.div`
  margin-top: 30px;
  position: relative;
  text-align: center;
  font-size: 50px;
  animation: ${rotate} 5s linear infinite;
`;

// TODO - Remove this since it is not being used?
export const S_Animation_Strafe = styled.div`
  position: relative;
  font-size: 90px;
  left: 50%;
  transform: translate(-50%);
  animation: ${strafe} 5s linear infinite;
`;
