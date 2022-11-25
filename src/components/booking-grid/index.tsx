import React from 'react';
import useConfiguration from '../../hooks/useConfiguration';
import { Row, BookingData, Booking } from '../../types';
import CanvasTable from '../canvas-table';
import { ColumnsComponent, RowsComponent, BookingComponent } from '../index'
import { BookingContainer, Container, DataContainer, DataWrapper, Wrapper } from './styled';

interface DataGridProps {
  rows: Row;
  bookingData: BookingData;
}

function BookingGrid({ rows, bookingData }: DataGridProps) {
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
              {Object.values(bookingData).map((reservations: Booking[], index: number) => (
                reservations
                  .map((reservation: Booking) => (
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

export default BookingGrid;