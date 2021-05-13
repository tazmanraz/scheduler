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


// function selectUserByName(state, name) {
//   const filteredNames = state.users.filter(user => user.name === name);
//   return filteredNames;
// }
//MONDAY
// console.log src/helpers/selectors.js:33
// [
//   { id: 1, time: '12pm', interview: null },
//   { id: 2, time: '1pm', interview: null },
//   {
//     id: 3,
//     time: '2pm',
//     interview: { student: 'Archie Cohen', interviewer: 2 }
//   }
// ]
//MONDAY
// console.log src/helpers/selectors.js:33
// [
//   { id: 1, time: '12pm', interview: null },
//   { id: 2, time: '1pm', interview: null },
//   {
//     id: 3,
//     time: '2pm',
//     interview: { student: 'Archie Cohen', interviewer: 2 }
//   }
// ]
//TUESDAY
// console.log src/helpers/selectors.js:33
// [
//   { id: 4, time: '3pm', interview: null },
//   {
//     id: 5,
//     time: '4pm',
//     interview: { student: 'Chad Takahashi', interviewer: 2 }
//   }
// ]