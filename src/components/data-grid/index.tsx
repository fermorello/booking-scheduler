import React from 'react';
import useConfiguration from '../../hooks/useConfiguration';
import { Row } from '../../types';
import BookingComponent from '../booking-component';
import CanvasTable from '../canvas-table';
import ColumnsComponent from '../columns-component';
import RowsComponent from '../rows-component';
import { BookingContainer, Container, DataContainer, DataWrapper, Wrapper } from './styled';

interface DataGridProps {
  rows: Row;
  bookingData: any;
}

function DataGrid({ rows, bookingData }: DataGridProps) {
  const {
    tableWidth,
    dates,
  } = useConfiguration();
  return (
    <Container>
      <Wrapper width={dates.length*tableWidth}>
        <ColumnsComponent />
        <DataContainer>
          <RowsComponent rows={rows} />
          <DataWrapper>
            <CanvasTable rows={rows} />
            <BookingContainer>
              {Object.values(bookingData).map((reservations: any, index: number) => (
                reservations
                  .map((reservation: any) => (
                    <BookingComponent
                      reservation={reservation}
                      index={index}
                    />
                  ))
              ))}
            </BookingContainer>
          </DataWrapper>
        </DataContainer>
      </Wrapper>
    </Container>
  )
}

export default DataGrid