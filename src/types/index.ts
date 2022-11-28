export type DateString = string;

type Status = 'ACTIVE' | 'STARTED' | 'COMPLETE' | null | string;

export interface Booking {
  id: string;
  startTime: string;
  endTime: string;
  status: Status
}

export interface BookingData {
  [key: string]: Booking[]
};

export type Row = string[];

export type Column = number[];

export interface BookingColor {
  [key: string]: string;
}