import moment from 'moment';
import { range } from '../helpers/numbers';
import { Booking } from '../types';
import { Configuration } from '../types/configuration';

export const default_config: Configuration = {
    columns: range(0, 24, 1),
    totalWidth: window.innerWidth,
    tableWidth: window.innerWidth - 70,
    dates: [],
    startRangeDate: moment().format('YYYY-MM-DD'),
    endRangeDate: moment().format('YYYY-MM-DD'),
    bookingColors: {

    },
    onBookingClick: (booking: Booking) => console.log(booking),
    dimension: window.innerWidth/24,
}