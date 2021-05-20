# Interview Scheduler

This is an interview scheduling single-page app created in React. It allows students to book a time slot with an interviewer from a list of interviewers between Monday to Friday at 12-5PM. Users can also edit and delete their appointments. The number of spots are updated dynamically and there are error handling features for deleting or saving appointments.



### Adding an Appointment
!["Adding Appointment"](https://github.com/tazmanraz/scheduler/blob/master/docs/pic1.JPG)

### Appointment Added with Hover Over Fridays
!["Appointment and Hover"](https://github.com/tazmanraz/scheduler/blob/master/docs/pic2.JPG)

### Selecting Appointment to Modify/Delete
!["Modifying Appointment"](https://github.com/tazmanraz/scheduler/blob/master/docs/pic3.JPG)

### Confirm Delete
!["Confirm Delete"](https://github.com/tazmanraz/scheduler/blob/master/docs/pic4.JPG)

## Dependancies

- Axios
- Classnames
- normalize.css
- React

## Testing Dependancies

- Storybook
- Jest
- Cypress


## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Notes and Things to Work On

- Still formatting and commenting code for readibility
- Would like to deploy on heroku or my own my hosting
- Data coming in from a scheduler-api linked [here](https://github.com/lighthouse-labs/scheduler-api). Currently, to get this running, it needs to run this which deals with postgres database which contains scheduling and interviewer information