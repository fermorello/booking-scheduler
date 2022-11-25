import React from 'react'
import { Row } from '../../types';
import { RowStyle, RowTitle } from './styled';

function RowsComponent({ rows }: any) {
  return (
    <RowTitle>
      {rows.map((row: Row, index: number) => (
        <RowStyle>{row}</RowStyle>
      ))}
    </RowTitle>
  )
}

export default RowsComponent;
