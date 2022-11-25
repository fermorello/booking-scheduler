import React from 'react';
import useConfiguration from '../../hooks/useConfiguration';
import { TableHeading, TableRow, TableWithProps } from '../../styled';
import { Column, Row } from '../../types';
import { GridTableCell } from './styled';

function CanvasTable({ rows }: any) {
  const {
    columns,
    tableWidth,
    dates,
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
