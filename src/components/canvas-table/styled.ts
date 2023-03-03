import styled from "styled-components";
import { TableCell } from "../../styled";

interface GridTableCellProps {
  width: number;
}

export const GridTableCell = styled(TableCell)<GridTableCellProps>`
  width: ${({ width }) => `${parseFloat(String(width)) - 2}px`};
  height: 50px;
  padding: 0px; 
  border: 1px solid #bbafaf2b;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background-color: grey;
  }
`;
