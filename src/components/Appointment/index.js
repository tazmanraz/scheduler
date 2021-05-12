import React, { Fragment } from 'react'
import './styles.scss';

import Header from "components/Appointment/Header"
import Empty from "components/Appointment/Empty"
import Show from "components/Appointment/Show"
// import Confirm from "components/Appointment/Confirm"
// import Status from "components/Appointment/Status"
// import Error from "components/Appointment/Error"
//import Form from "components/Appointment/Form"


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


  return (
    <article className="appointment">
      <Header time={props.time} />
      {props.interview ?
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
      }

   

    </article>
  )
}