// This selector gets all the appointments for the day and is referenced in Applicaiton.js
export function getAppointmentsForDay(state, day) {

//  Finds opject for particular day
  const dayFound = state.days.find(eachDay => eachDay.name === day);

  if (!dayFound) {
    return [];
  }

  // Maps appointments for day
  const apptsForDay = dayFound.appointments.map(appointId => state.appointments[appointId])

  return apptsForDay
}


// This selector returns all the interview data from the interviewer object. Referenced in Application.js
export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
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


// This selector gets all the interviewers for a particular day. Referenced in Application.js
export function getInterviewersForDay(state, day) {
  const dayFound = state.days.find(eachDay => eachDay.name === day);

  if (!dayFound) {
    return [];
  }
  const interviewers = dayFound.interviewers.map(interviewerId => state.interviewers[interviewerId]);

  return interviewers;
}

// This is a helper function for updateSpots that calculates the spots for a day
const getSpotsForDay = function(dayObj, appointments){
  let spots =0;
  for (const id of dayObj.appointments) {
    if(!appointments[id].interview) {
      spots++;
    }
  }
  return spots;
};

// This gives us an accurate spots count for day without mutating the original data.
// Referenced in useApplication data in our custom hook
export function updateSpots (dayName, days, appointments) {
  // Find the day object 
  const dayObj = days.find(day => day.name === dayName);

  // Calculate the spot for this day
  const spots = getSpotsForDay(dayObj, appointments);
 
  const newDay = { ...dayObj, spots };
  return days.map(day => day.name === dayName ? newDay : day)
};