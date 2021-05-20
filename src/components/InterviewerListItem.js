// This component gives information about an indivdual interviewer and deals
// with the function of a selected interviewer

import React from "react";
import "components/InterviewerListItem.scss";
import classnames from 'classnames/bind';

export default function InterviewerListItem(props) {

  // CSS for this component
  const interviewerClass = classnames("interviewers__item", {
    "interviewers__item--selected": props.selected,
  });

  // Lists all information for each interviewer
  return (
    <li className={interviewerClass}
      onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );

}