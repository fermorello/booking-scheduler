import React from 'react'
import moment from 'moment';
import { translate } from '../../helpers/translate';
import useConfiguration from '../../hooks/useConfiguration';
import { TableHead, TableHeading, TableWithProps } from '../../styled';
import { HeaderContainer, HeaderWhiteSpace, DateColumn } from './styled';

function ColumnsComponent() {
  const {
    columns,
    tableWidth,
    dates,
    language
  } = useConfiguration();
  return (
    <HeaderContainer>
      <HeaderWhiteSpace />
      <HeaderContainer>
        {dates.map((day: Date) => (
          <TableWithProps tableWidth={tableWidth}>
            <DateColumn>
              <TableHeading padding="20px 0px">{translate[String(moment(day).format('dd'))][language]} - {moment(day).format('DD/MM/YYYY')}</TableHeading>
              {columns.length !== 1 && (
                <TableHeading>
                  {columns.map((column: number) => (
                    <TableHead width={(tableWidth) / columns.length} padding={0} fontSize={12}>{column - 1}:00</TableHead>
                  ))}
                </TableHeading>
              )}
            </DateColumn>
          </TableWithProps>
        ))}
      </HeaderContainer>
    </HeaderContainer>
  )
}

export default ColumnsComponent;
