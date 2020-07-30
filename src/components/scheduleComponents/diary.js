import React, { Component } from 'react';
//import { Calendar, momentLocalizer } from 'react-big-calendar';
import { momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import events from '../scheduleComponents/events'
import * as dates from '../../../src/utils/dates'
import { Calendar } from '@fullcalendar/core';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import FullCalendar from "@fullcalendar/react";

const localizer = momentLocalizer(moment);
const API_KEY = process.env.GOOGLE_CAL_API_KEY;
const calendarEl = document.getElementById('fullCalendar');

// let gCalendar = new Calendar(calendarEl, {
//   plugins: [ googleCalendarPlugin ],
//   googleCalendarApiKey: {API_KEY},
//   events: {
//     googleCalendarId: 'g86ul4de7vpclr4upft4d03nt0@group.calendar.google.com'
//   }
// });
class Diary extends Component {
  // constructor() {
  //   super();
  //   const now = new Date();
  //   this.state = {
  //     name: 'React',
  //     events
  //   };
  // }

  render() {
    return (
      <div className="diary">
        <div style={{ height: '500pt'}}>
          {/* <Calendar
            events={events}
            startAccessor="start"
            endAccessor="end"
            max={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours')}
            defaultDate={moment().toDate()}
            localizer={localizer}
            ref={gCalendar}
          /> */}
        </div>
      </div>
    );
  }
}

export default Diary;