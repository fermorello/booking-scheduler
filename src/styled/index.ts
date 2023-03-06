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
  border-left: 2px solid #80808045;
  box-sizing: border-box;
`;

export const TableRow = styled.tr`
  display: table-row;
`;

interface TableHeadingProps {
  padding?: string;
}

export const TableHeading = styled.div<TableHeadingProps>`
  display: table-header-group;
  padding: ${({ padding }) => padding};
`;

interface TableHeadProps {
  width?: number;
  padding?: number;
  fontSize?: number;
}

export const TableHead = styled.th<TableHeadProps>`
  display: table-cell;
  width: ${({ width }) => `${width}px`};
  padding: ${({ padding }) => `${padding}px`};
  font-size: ${({ fontSize }) => `${fontSize}px`};
`;

export const TableCell = styled.td`
  display: table-cell;
  &:hover {
    background-color: #ddd;
  }
`;

