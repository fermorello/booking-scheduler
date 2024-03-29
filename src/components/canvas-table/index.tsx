import React from 'react';
import useConfiguration from '../../hooks/useConfiguration';
import { TableHeading, TableRow, TableWithProps } from '../../styled';
import { Row } from '../../types';
import { GridTableCell } from './styled';

function CanvasTable({ rows }: any) {
  const {
    columns,
    tableWidth,
    dates,
    onCellClick
  } = useConfiguration();
  return (
    <>
      {dates.map((day: Date, dayIndex: number) => (
        <TableWithProps tableWidth={tableWidth}>
          <TableHeading>
            {rows.map((row: Row, rowIndex: number) => (
              <TableRow>
                {columns.map((column: any, columnIndex: number) => (
                  <GridTableCell
                    width={(tableWidth) / columns.length}
                    title={`${dates[dayIndex]} - ${columnIndex * (24 / columns.length)}hs`}
                    onClick={() => onCellClick?.((24 / columns.length)*columnIndex)}
                  />
                ))}
              </TableRow>
            ))}
          </TableHeading>
        </TableWithProps>
      ))}
    </>
  )
}

export default CanvasTable;
