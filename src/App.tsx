import moment from 'moment';
import React from 'react';
import DataGrid from './components/data-grid';
import { getDatesInRange } from './helpers/dates';
import { BookingData, Column } from './types';

export interface Configuration {
  columns: Column;
  totalWidth: number;
  tableWidth: number;
  dates: Date[];
  startRangeDate: string;
  endRangeDate: string;
}

export const configuration: any = React.createContext(null);

function App() {
  // const dates = getDatesInRange(new Date(moment(startRangeDate).format('YYYY/MM/DD')), new Date(moment(endRangeDate).format('YYYY/MM/DD')));
  const dates = getDatesInRange(new Date(moment(moment(new Date()).format('YYYY/MM/DD')).format('YYYY/MM/DD')), new Date(moment().year(2022).month(11).day(25).format('YYYY/MM/DD')));
  const config: Configuration = {
    columns: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    totalWidth: window.innerWidth,
    tableWidth: window.innerWidth - 70,
    dates,
    startRangeDate: '2022-11-24',
    endRangeDate: '2022-11-25',
  }
  const data: BookingData = {
    AD221TH: [
      {
        id: "R007205",
        startTime: "2022-11-24T14:30:04",
        endTime: "2022-11-24T19:30"
      },
      {
        id: "R007206",
        startTime: "2022-11-24T22:30:04",
        endTime: "2022-11-25T03:55"
      }
    ]
  };
  return (
    <configuration.Provider value={config}>
      <DataGrid rows={Object.keys(data)} bookingData={Object.values(data)} />
    </configuration.Provider>
  )
}

export default App;
