import React from 'react';
import ReactDOM from 'react-dom/client';
import BookingScheduler from './components/booking-scheduler';
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <BookingScheduler
      totalWidth={window.innerWidth}
      hoursPerDay={1}
      startRangeDate="2022-11-24"
      endRangeDate="2022-11-26"
      onClick={(booking: any) => console.log(booking)}
      bookingColors={{
        active: "#00c100db",
        started: "#00c100db",
        complete: "#ff5722",
      }}
    /> */}
  </React.StrictMode>
);
