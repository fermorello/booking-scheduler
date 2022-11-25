import React, { useMemo } from 'react'
import moment from 'moment';
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
    dimension,
    startRangeDate,
    columns,
    bookingColors,
    onBookingClick
  } = useConfiguration();
  const columnHours = useMemo(() => columns.length, []);
  const xPosition = useBooking({ reservation });

  return (
    <>
      {xPosition?.duration > 0 && (
        <ReservationItem
          background={bookingColors[String(reservation.status.toLowerCase())]}
          dimension={dimension}
          day={dateDifference(reservation.startTime, moment(startRangeDate).format('YYYY/MM/DD HH:mm:ss'), 'days', false)}
          start={xPosition.start}
          duration={xPosition.duration}
          index={index}
          title={`Reserva ${reservation.id} - ${moment(reservation.startTime).format('DD/MM/YYYY HH:mm')} to ${moment(reservation.endTime).format('DD/MM/YYYY HH:mm')}`}
          columnHours={columnHours}
          onClick={() => onBookingClick(reservation)}
        >
          {reservation.id}
        </ReservationItem>
      )}
    </>
  );
}

export default BookingComponent;
