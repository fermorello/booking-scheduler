import React from 'react'
import moment from 'moment';
import { dateDifference, durationBetweenTwoDatesInHours, hourFormatter } from '../helpers/dates';
import useConfiguration from './useConfiguration';

function useBooking({ reservation }: any) {
  const {
    startRangeDate,
    endRangeDate,
    columns: columnHours,
  } = useConfiguration();

  const dateDiffStart = dateDifference(reservation.startTime, moment(startRangeDate).format('YYYY/MM/DD HH:mm:ss'), 'days', true);
  const dateDiffEnd = dateDifference(reservation.endTime, moment(endRangeDate).format('YYYY/MM/DD HH:mm:ss'), 'days', true);
  const obj: { start: number; end: number; duration: number } = { start: 0, end: 23.99, duration: 0 }
  if (dateDiffStart > 0) obj.start = hourFormatter(moment(reservation.startTime).hour(), moment(reservation.startTime).minutes());
  if (dateDiffEnd < 1) obj.end = hourFormatter(moment(reservation.endTime).hour(), moment(reservation.endTime).minutes());
  if (dateDiffStart < 0) obj.duration = durationBetweenTwoDatesInHours(moment(startRangeDate).format('YYYY/MM/DD HH:mm:ss'), reservation.endTime);
  if (dateDiffEnd > 1) obj.duration = durationBetweenTwoDatesInHours(moment(endRangeDate).format('YYYY/MM/DD HH:mm:ss'), reservation.endTime);
  if (dateDiffStart >= 0 && dateDiffEnd <= 1) obj.duration = durationBetweenTwoDatesInHours(reservation.startTime, reservation.endTime);
  if (dateDiffStart < 0 && dateDiffEnd > 1) obj.duration = columnHours.length;
  if (dateDiffStart > 0 && dateDiffEnd > 1) obj.duration = durationBetweenTwoDatesInHours(reservation.startTime, moment(endRangeDate).set({ 'hour': 23, 'minutes': 59 }).format('YYYY-MM-DDTHH:mm'));

  return obj;
}

export default useBooking;
