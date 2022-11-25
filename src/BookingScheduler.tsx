import React, { useMemo } from 'react';
import BookingGrid from './components/booking-grid';
import { range } from './helpers/numbers';
import { Booking, BookingColor, BookingData, Column } from './types';
import { Configuration } from './types/configuration';

export const configuration: any = React.createContext(null);

interface BookingSchedulerProps {
  dates: Date[];
  totalWidth: number;
  hoursPerDay: number;
  startRangeDate: string;
  endRangeDate: string;
  onClick: (booking: Booking) => void;
}

function BookingScheduler({ dates, totalWidth, hoursPerDay, startRangeDate, endRangeDate, onClick }: BookingSchedulerProps) {
  const tableWidth = useMemo(() => (totalWidth / (24 / range(0, 24, 4).length)) - 70, []);
  const dimension = useMemo(() => (tableWidth) / range(0, 24, 4).length, []);
  const config: Configuration = {
    columns: range(0, 24, hoursPerDay),
    totalWidth,
    tableWidth,
    dimension,
    dates,
    startRangeDate,
    endRangeDate,
    onBookingClick: (booking: Booking) => onClick(booking),
    bookingColors:  {
      active: "#00c100db",
      started: "#00c100db",
      complete: "#ff5722",
    },
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
