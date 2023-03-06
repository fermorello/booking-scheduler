import moment from 'moment';
import React, { useMemo } from 'react';
import BookingGrid from '../booking-grid';
import { getDatesInRange } from '../../helpers/dates';
import { range } from '../../helpers/numbers';
import { Booking, BookingData, Language } from '../../types';
import { configuration } from '../../context'
import { Configuration } from '../../types/configuration';
import GlobalStyles from '../../theme/global-style';
interface BookingSchedulerProps {
  totalWidth: number;
  hoursPerDay: number;
  startRangeDate: string;
  endRangeDate: string;
  bookingColors: { [key: string]: string }
  onBookingClick?: (booking: Booking) => void;
  onCellClick?: (cell: any) => void;
  bookingData: BookingData;
  language: Language;
}

function BookingScheduler({ bookingData, totalWidth, hoursPerDay, startRangeDate, endRangeDate, onBookingClick, onCellClick, bookingColors, language }: BookingSchedulerProps) {
  const tableWidth = useMemo(() => (totalWidth / (24 / range(0, 24, hoursPerDay).length)) - 70, []);
  const dimension = useMemo(() => (tableWidth) / range(0, 24, hoursPerDay).length, []);
  const dates = useMemo(() => getDatesInRange(new Date(moment(startRangeDate).format('YYYY/MM/DD')), new Date(moment(endRangeDate).format('YYYY/MM/DD'))), [startRangeDate, endRangeDate]);
  const config: Configuration = {
    columns: range(0, 24, hoursPerDay),
    totalWidth,
    tableWidth,
    dimension,
    dates,
    startRangeDate,
    endRangeDate,
    onBookingClick: (booking: Booking) => onBookingClick?.(booking),
    onCellClick: (booking: Booking) => onCellClick?.(booking),
    bookingColors,
    language,
  }
  return (
    <configuration.Provider value={config}>
      <GlobalStyles />
      <BookingGrid rows={Object.keys(bookingData)} bookingData={Object.values(bookingData)} />
    </configuration.Provider>
  )
}

export default BookingScheduler;
