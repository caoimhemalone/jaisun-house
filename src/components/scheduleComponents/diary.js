import React, { Component } from 'react';
//import { Calendar, momentLocalizer } from 'react-big-calendar';
import * as moment from 'moment';
//import 'react-big-calendar/lib/css/react-big-calendar.css';
////import events from '../scheduleComponents/events'
import * as dates from '../../../src/utils/dates'
// import { Calendar } from '@fullcalendar/core';
// import FullCalendar from "@fullcalendar/react";
import BigCalendar from 'react-big-calendar'
import { getEvents } from '../scheduleComponents/gcal'

const localizer = BigCalendar.momentLocalizer(moment);

const API_KEY = process.env.GOOGLE_CAL_API_KEY;


class Diary extends Component {


  constructor () {
    super()
    this.state = {
      events: []
    }
  }
  componentDidMount () {
    getEvents((events) => {
      this.setState({events})
    })
  }

  render() {
    return (
      <div className="diary">
        <div style={{ height: '500pt'}}>
        <BigCalendar
        style={{height: '420px'}}
        events={this.state.events}
      />
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