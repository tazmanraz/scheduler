import React, { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  //ADD FUNCTION FOR UPDATE SPOTS
  //TEST WITH GARY'S GIST HERE https://gist.github.com/gary-jipp/50c657b3c1b0bb3f2be5528de779fc41
  
  // const updateSpots = function (dayName, days, appointments) {

  // };

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    //WILL NEED TO ADD SPOTS HERE AND IN PROMISE
    //DO SAME FOR cancelInterview
    // const spots = updateSpots(dayName, days, appt)

    return axios.put(`/api/appointments/${id}`,{interview})
    
    .then(() => setState({
      ...state,
      appointments
    }))
  }


  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.delete(`/api/appointments/${id}`)
    .then(() => setState({
      ...state,
      appointments
    }))
  }

  const setDay = day => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      const days = all[0].data
      const appointments = all[1].data
      const interviewers = all[2].data

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