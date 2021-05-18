import React, { Fragment } from 'react'
import './styles.scss';

import Header from "components/Appointment/Header"
import Empty from "components/Appointment/Empty"
import Show from "components/Appointment/Show"
import Form from "components/Appointment/Form";
import Status  from "components/Appointment/Status";
import Confirm  from "components/Appointment/Confirm";
import Error  from "components/Appointment/Error";

import useVisualMode from "hooks/useVisualMode";



export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
  
    transition(SAVING);
  
    props
      .bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      .catch(error => transition(ERROR_SAVE, true));
  }

  function destroy(event) {
    transition(DELETING, true);
    props
     .cancelInterview(props.id)
     .then(() => transition(EMPTY))
     .catch(error => transition(ERROR_DELETE, true));
   }

  function confirmDelete() {
    transition(CONFIRM)
  }

  function editAppt() {
    transition(EDIT)
  }

  return (
    <article 
    className="appointment"
    data-testid="appointment"
    >
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
            onConfirm={destroy}
          />
        )}
        {mode === ERROR_SAVE &&
          <Error 
            message = {"Could not save appointment."} 
            onClose={back}
          />
        }
        {mode === ERROR_DELETE &&
          <Error 
            message = {"Could not delete appointment."} 
            onClose={back}
          />
        }

    </article>
  )
}