import styled from 'styled-components';

export const Table = styled.div`
  display: table;
  width: 100%;
  border-spacing: 0px;
`;

interface ITableWithProps {
  tableWidth: number;
}

export const TableWithProps = styled(Table)<ITableWithProps>`
  width: ${({ tableWidth }) => `${tableWidth}px`};
  border-left: 2px solid grey;
  box-sizing: border-box;
`;

export const TableRow = styled.tr`
  display: table-row;
`;

export const TableHeading = styled.div`
  display: table-header-group;
`;

export const TableHead = styled.th`
  display: table-cell;
`;

export const TableCell = styled.td`
  display: table-cell;
  &:hover {
    background-color: s#ddd;
  }
`;

