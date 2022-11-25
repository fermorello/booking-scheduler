import moment from 'moment';
import React from 'react'
import { dateDifference } from '../../helpers/dates';
import useBooking from '../../hooks/useBooking';
import useConfiguration from '../../hooks/useConfiguration';
import { ReservationItem } from './styled';

function BookingComponent(
  {
    reservation,
    index,
  }: any
) {
  const {
    tableWidth,
    startRangeDate,
    columns,
  } = useConfiguration();
  const columnHours = columns.length;
  const dimension = (tableWidth) / columnHours;

  const xPosition = useBooking({ reservation });

  return (
    <>
      {xPosition?.duration > 0 && (
        <ReservationItem
          background="#00c100db"
          dimension={dimension}
          day={dateDifference(reservation.startTime, moment(startRangeDate).format('YYYY/MM/DD HH:mm:ss'), 'days', false)}
          start={xPosition.start}
          duration={xPosition.duration}
          index={index}
          title={`Reserva ${reservation.id} - ${moment(reservation.startTime).format('DD/MM/YYYY HH:mm')} to ${moment(reservation.endTime).format('DD/MM/YYYY HH:mm')}`}
          columnHours={columnHours}
          onClick={() => console.log(reservation)}
        >
          {reservation.id}
        </ReservationItem>
      )}
    </>
  );
}

export default BookingComponent;
