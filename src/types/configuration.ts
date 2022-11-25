import { Booking, BookingColor, Column } from ".";

export interface Configuration {
    columns: Column;
    totalWidth: number;
    tableWidth: number;
    dates: Date[];
    startRangeDate: string;
    endRangeDate: string;
    bookingColors: BookingColor;
    onBookingClick: (booking: Booking) => void;
    dimension: number;
}