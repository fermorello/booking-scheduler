import { Booking, BookingColor, Column, Language } from ".";

export interface Configuration {
    columns: Column;
    totalWidth: number;
    tableWidth: number;
    dates: Date[];
    startRangeDate: string;
    endRangeDate: string;
    bookingColors: BookingColor;
    onBookingClick?: (booking: Booking) => void;
    onCellClick?: (cell: any) => void;
    dimension: number;
    language: Language;
}