import React, { useState, useEffect } from "react";
import {Calendar, Views, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

function TrainingCalendar() {

  // tapahtumat
  const [events, setEvents] = useState([]);  

  // hae tapahtumat  
  const fetchData = () => {
    fetch('https://customerrest.herokuapp.com/api/trainings')
      .then(response => response.json())
      .then(data => setEvents(data.content))
      .catch(err => console.error(err))
  };
  
  // kalenteritapahtumien mappaaminen eventsistä
  let calendarevents = events.map(x => {
    let newevent = {
      'title': moment(x.date).format('h:mm') + " " + x.activity,
      'start': x.date,
      'end': x.date,
      'allDay?': false,
      'resource?': x.links[2].href
    };    
    return newevent;
  });
  
  // kalenterin luomiseen käytetty tätä: https://github.com/jquense/react-big-calendar   
  let CalendarView = ({ localizer }) => (
    <Calendar
      events={calendarevents}
      views={['month', 'agenda']}
      defaultView={Views.MONTH}
      timeslots={8}
      showMultiDayTimes
      defaultDate={new Date()}
      localizer={momentLocalizer(moment)}
      style={{ height: "80vh" }}
    />
  );

  // useEffect jolla haetaan tapahtumat
  useEffect(() => fetchData(), []);
  console.log(events); // tarkistetaan mitä saatiin vastaukseksi

  return (
      <div>
        <CalendarView />
      </div>);

}

export default TrainingCalendar;