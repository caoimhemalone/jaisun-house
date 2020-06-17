import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import events from '../scheduleComponents/events'
import * as dates from '../../../src/utils/dates'

const localizer = momentLocalizer(moment);

class Diary extends Component {
  constructor() {
    super();
    const now = new Date();
    this.state = {
      name: 'React',
      events
    };
  }

  render() {
    return (
      <div className="diary">
        <div style={{ height: '500pt'}}>
          <Calendar
            events={events}
            startAccessor="start"
            endAccessor="end"
            max={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours')}
            defaultDate={moment().toDate()}
            localizer={localizer}
          />
        </div>
      </div>
    );
  }
}

export default Diary;