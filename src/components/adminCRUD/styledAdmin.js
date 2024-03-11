import { styled } from "styled-components";

const border_radius_form = "15px";

const border_radius_functionality = "5px";
const font_size = "20px";
const color = "#fff0d9";

const margin_between_buttons = "20px";

//
export const S_Userlist_Box = styled.div`
  margin-top: 10px;
`;

// User Table
export const S_Userlist_Table = styled.table`
  opacity: ${(props) => (props.$blur === "true" ? "0.3" : "1")};
`;

export const S_th = styled.th`
  width: auto;
  padding-right: 40px;
`;

export const S_UserList_Row = styled.tr``;

export const S_Userlist_Data = styled.td``;

export const S_Button_Box = styled.div``;

export const S_Table_Button = styled.button`
  font-size: 15px;
  color: ${color};
  height: 35px;
  width: 35px;
  border-radius: ${border_radius_functionality};
  background-color: #fff0d9;
  &:hover {
    background: radial-gradient(at 50% 50%, #fff0d9, rgb(214, 143, 112));
  }
`;

export const S_Form_FloatingDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  font-size: ${font_size};
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${(props) => (props.$blur === "true" ? "1" : "0")};
`;

export const S_Form_Input = styled.input`
  padding: 15px;
  background: #f0f0f0;
  border-radius: ${border_radius_form};
  font-weight: 500;
  margin-bottom: 12px;
`;

export const S_Form_Button_Box = styled.div`
  display: flex;
  justify-content: center;
`;

export const S_Form_Button = styled.button`
  margin-left: ${(props) =>
    props.$left === "true" ? margin_between_buttons : "0px"};
  margin-right: ${(props) => (props.$right ? margin_between_buttons : "0px")};
  background: ${(props) =>
    props.$active === "true"
      ? "radial-gradient(at 50% 50%, rgb(214, 143, 112), #f9d2b5)"
      : "rgba(0, 0, 0, 0.1)"};
  width: 50px;
  height: 50px;
  background-color: ${color};
  border-radius: ${border_radius_functionality};
  &:hover {
    background: radial-gradient(at 50% 50%, rgb(214, 143, 112), #f9d2b5);
    cursor: pointer;
  }
`;
