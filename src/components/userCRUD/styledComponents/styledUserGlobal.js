import { ReactComponent as AddSvg } from "../../utils/icons/add.svg";
import { ReactComponent as DeleteSvg } from "../../utils/icons/delete.svg";
import { ReactComponent as UpdateSvg } from "../../utils/icons/update.svg";
import { ReactComponent as GenerateSvg } from "../../utils/icons/generate.svg";
import { ReactComponent as HtmlSvg } from "../../utils/icons/html.svg";
import { ReactComponent as PdfSvg } from "../../utils/icons/pdf.svg";
import { ReactComponent as DocxSvg } from "../../utils/icons/docx.svg";
import { ReactComponent as PinSvg } from "../../utils/icons/pin.svg";
import { ReactComponent as UnpinSvg } from "../../utils/icons/unpin.svg";
import { styled } from "styled-components";

import {
  brightest,
  brighter,
  bright,
  neutral,
  dark,
  darker,
  darkest,
  big,
  medium,
  small,
} from "../../utils/styledComponentsConstants";

const border_radius = "5px";

export const S_FunctionalityButton_Box = styled.div``;

export const S_FunctionalityButton = styled.button`
  margin-top: 15px;
  height: 50px;
  width: 50px;
  border-radius: ${border_radius};
  background-color: ${neutral};
  &:hover {
    background-color: ${neutral};
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
  font-size: ${big};
  color: ${brightest};
`;

export const S_AddSvg = styled(AddSvg)`
  margin-right: 10px;
  border: 1px solid ${brighter};
  border-radius: 5px;
  width: 50px;
  height: 50px;
  fill: ${brightest};
  &:hover {
    background-color: ${brightest};
    fill: ${darker};
    cursor: pointer;
  }
`;

export const S_DeleteSvg = styled(DeleteSvg)`
  margin-right: 10px;
  border: 1px solid ${brighter};
  border-radius: 5px;
  width: 50px;
  height: 50px;
  fill: ${brightest};
  &:hover {
    background-color: ${brightest};
    fill: ${darker};
    cursor: pointer;
  }
`;

export const S_UpdateSvg = styled(UpdateSvg)`
  margin-right: 10px;
  width: 100%;
  height: 100%;
  fill: ${brightest};
`;

export const S_GenerateSvg = styled(GenerateSvg)`
  margin-right: 10px;
  width: 100%;
  height: 100%;
  fill: ${brightest};
`;

export const S_HtmlSvg = styled(HtmlSvg)`
  width: 100%;
  height: 100%;
  fill: ${(props) =>
    props.$active === "true" ? `${darkest}` : `${brightest}`};
`;

export const S_PdfSvg = styled(PdfSvg)`
  width: 100%;
  height: 100%;
  fill: ${(props) =>
    props.$active === "true" ? `${darkest}` : `${brightest}`};
`;

export const S_DocxSvg = styled(DocxSvg)`
  width: 100%;
  height: 100%;
  fill: ${(props) =>
    props.$active === "true" ? `${darkest}` : `${brightest}`};
`;

export const S_PinSvg = styled(PinSvg)`
  fill: ${brighter};
  width: 30px;
  height: 25px;
  fill: ${brightest};
  &:hover {
    cursor: pointer;
    fill: ${brightest};
  }
`;

export const S_UnpinSvg = styled(UnpinSvg)`
  fill: ${brighter};
  width: 30px;
  height: 25px;
  fill: ${brightest};
  &:hover {
    cursor: pointer;
    fill: ${brightest};
  }
`;
