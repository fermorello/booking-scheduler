import moment from 'moment';

export const getDatesInRange = (startDate: Date, endDate: Date) => {
  const date = new Date(startDate.getTime());
  const dates = [];

  while (date <= endDate) {
    dates.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return dates;
}

export const dateIsBetween = (start: string, end: string, columnDate: string, startOf: any) => {
  const isBetween = moment(columnDate).isBetween(start, end, startOf, '[)');
  return isBetween;
}
export const dateDifference = (start: string, end: string, type: any, precise: boolean) => {
  return moment(start).diff(moment(end), type, precise) ;
}

export const durationBetweenTwoDatesInHours = (start: string, end: string, type?: any) => {
  return moment.duration(moment(end).diff(moment(start), type, true)).asHours();
}

export const hourFormatter = (hour: number, minutes: number) => {
  return hour + minutes/60;
}
