import React, { Fragment } from 'react'
import './styles.scss';

import Header from "components/Appointment/Header"
import Empty from "components/Appointment/Empty"
import Show from "components/Appointment/Show"
import Form from "components/Appointment/Form";
import Status  from "components/Appointment/Status.js";
import Confirm  from "components/Appointment/Confirm.js";



import useVisualMode from "hooks/useVisualMode";



export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    console.log('Save initiated');
    transition(SAVING);
    props.bookInterview(props.id,interview)
    .then(() => {
      transition(SHOW)
    })
    .catch((err)=>console.log(err))
  }

  function deleteAppointment() {
    transition(DELETING);
    props.cancelInterview(props.id)
    .then(() => {
      transition(EMPTY)
    })
  }

  function confirmDelete() {
    transition(CONFIRM)
  }

  function editAppt() {
    transition(EDIT)
  }

  return (
    <article className="appointment">
      <Header time={props.time} />

      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={confirmDelete}
          onEdit={editAppt}
        />
      )}

      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onSave={save}
          onCancel={back}
        />)}

        {mode === EDIT && (
          <Form
          name={props.interview.student}
          interviewers={props.interviewers}
          onSave={save}
          onCancel={back}
          interviewer={props.interview.interviewer.id}
        />)}
        
        {mode === SAVING &&
          <Status message = {"Saving"} />
        }
        {mode === DELETING &&
          <Status message = {"Deleting"} />
        }
        {mode === CONFIRM && (
          <Confirm 
            message={"Are you sure you would like to delete?"}
            onCancel={back}
            onConfirm={deleteAppointment}
          />
        )}
    </article>
  )
}