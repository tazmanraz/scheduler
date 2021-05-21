// This custom hook deals working with the API data and most of the logic in Application.js. 
// Has important functions such as bookInterview and cancelInterview which deal with updating the interviews immutably
// Referenced in Application.js and Appointment index.js

import { useState, useEffect } from "react";
import axios from "axios";
import { updateSpots } from "helpers/selectors"

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  // Updates interview immutably
  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    // Updates spots remaining properly. See selectors.js
    const days = updateSpots(state.day, state.days, appointments)

    return axios.put(`/api/appointments/${id}`, { interview })

      .then(() => setState({
        ...state,
        appointments,
        days
      }))
  }


  // Same concepts as updating with bookInterview
  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const days = updateSpots(state.day, state.days, appointments)

    return axios.delete(`/api/appointments/${id}`)
      .then(() => setState({
        ...state,
        appointments, days
      }))
  }

  const setDay = day => setState({ ...state, day });

  // Ensures all these promises are fullfilled when making these get requests to API
  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      const days = all[0].data
      const appointments = all[1].data
      const interviewers = all[2].data

      //Updates all the states properly
      setState(prev => ({ ...prev, days, appointments, interviewers }));
    });
  }, [])


  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  }

}