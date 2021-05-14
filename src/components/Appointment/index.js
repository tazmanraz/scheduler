import React, { Fragment } from 'react'
import './styles.scss';

import Header from "components/Appointment/Header"
import Empty from "components/Appointment/Empty"
import Show from "components/Appointment/Show"
import Form from "components/Appointment/Form";

import useVisualMode from "hooks/useVisualMode";



export default function Appointment(props) {
  // THIS DID NOT WORK. LOOK INTO WHY

  // const formatAppt = () => {
  //   if (props.interviewer){
  //     <Show 
  //       student={props.interview.student}
  //       interviewer={props.interview.interviewer}
  //       onEdit={props.onEdit}
  //       onCancel={props.onDelete}
  //     />
  //   } else {
  //     <Empty 
  //       onAdd={props.onAdd}
  //     />
  //   }
  // }

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );


  return (
    <article className="appointment">
      <Header time={props.time} />
      {/* {props.interview ?
        <Show 
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onEdit={props.onEdit}
          onCancel={props.onDelete}
        />
        :
        <Empty 
          onAdd={props.onAdd}
        />
      } */}

      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onSave={props.onSave}
          onCancel={back}

        />)}

    </article>
  )
}