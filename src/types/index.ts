export type DateString = string;

interface Booking {
  id: string;
  startTime: string;
  endTime: string;
}

export interface BookingData {
  [key: string]: Booking[]
};

export type Row = string[];

export type Column = number[];