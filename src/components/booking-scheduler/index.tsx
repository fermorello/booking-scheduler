import moment from 'moment';
import React, { useMemo } from 'react';
import BookingGrid from '../booking-grid';
import { getDatesInRange } from '../../helpers/dates';
import { range } from '../../helpers/numbers';
import { Booking, BookingData } from '../../types';
import { configuration } from '../../context'
import { Configuration } from '../../types/configuration';

interface BookingSchedulerProps {
  totalWidth: number;
  hoursPerDay: number;
  startRangeDate: string;
  endRangeDate: string;
  bookingColors: { [key: string]: string}
  onClick: (booking: Booking) => void;
}

function BookingScheduler({ totalWidth, hoursPerDay, startRangeDate, endRangeDate, onClick, bookingColors }: BookingSchedulerProps) {
  const tableWidth = useMemo(() => (totalWidth / (24 / range(0, 24, hoursPerDay).length)) - 70, []);
  const dimension = useMemo(() => (tableWidth) / range(0, 24, hoursPerDay).length, []);
  const dates =   useMemo(() => getDatesInRange(new Date(moment(startRangeDate).format('YYYY/MM/DD')), new Date(moment(endRangeDate).format('YYYY/MM/DD'))), []);
  const config: Configuration = {
    columns: range(0, 24, hoursPerDay),
    totalWidth,
    tableWidth,
    dimension,
    dates,
    startRangeDate,
    endRangeDate,
    onBookingClick: (booking: Booking) => onClick(booking),
    bookingColors,
  }
  const data: BookingData = {
    AD221TH: [
      {
        id: "R007205",
        startTime: "2022-11-24T14:30:04",
        endTime: "2022-11-24T19:30",
        status: 'ACTIVE',
      },
      {
        id: "R007206",
        startTime: "2022-11-24T22:30:04",
        endTime: "2022-11-25T03:55",
        status: 'COMPLETE',
      }
    ]
  };
  return (
    <configuration.Provider value={config}>
      <BookingGrid rows={Object.keys(data)} bookingData={Object.values(data)} />
    </configuration.Provider>
  )
}

export default BookingScheduler;
