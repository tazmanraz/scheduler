export function getAppointmentsForDay(state, day) {
  const apptsForDay = [];

  for (const dayCheck of state.days) {
    if (dayCheck.name === day) {
      for (const apptCheck of dayCheck.appointments) {
        apptsForDay.push(state.appointments[apptCheck])
      }
    }
  }

  return apptsForDay;
}

export function getInterview(state, interview) {

  if (!interview) return null;
  let fullInterview = {};

  for (let objKey in state.interviewers) {
    if (state.interviewers[objKey].id === interview.interviewer) {
      fullInterview = {
        student: interview.student,
        interviewer: state.interviewers[objKey]
      }
    }
  }
  return fullInterview;
}

export function getInterviewersForDay(state, day) {
  const dayFound = state.days.find(eachDay => eachDay.name === day);

  if (!dayFound) {
    return [];
  }
  const interviewers = dayFound.interviewers.map(interviewerId => state.interviewers[interviewerId]);

  return interviewers;

}

const getSpotsForDay = function(dayObj, appointments){
  let spots =0;
  for (const id of dayObj.appointments) {
    if(!appointments[id].interview) {
      spots++;
    }
  }
  return spots;
};

export function updateSpots (dayName, days, appointments) {
  // Find the day object 
  const dayObj = days.find(day => day.name === dayName);

  // Calculate the spot for this day
  const spots = getSpotsForDay(dayObj, appointments);
 
  const newDay = { ...dayObj, spots };
  return days.map(day => day.name === dayName ? newDay : day)
};