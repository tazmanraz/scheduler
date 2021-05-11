import React from "react";
import "components/InterviewerListItem.scss";
import classnames from 'classnames/bind';

export default function InterviewerListItem(props) {

  const interviewerListItemClass = classnames("interviewers__item", {
    "interviewers__item--selected": props.selected,
  });

  return (
    //   <li className="interviewers__item">
    //     <img
    //       className="interviewers__item-image"
    //       src="https://i.imgur.com/LpaY82x.png"
    //       alt="Sylvia Palmer"
    //     />
    // Sylvia Palmer
    //   </li>

    <li 
    className={interviewerListItemClass}
    onClick = {() => props.setInterviewer(props.name)}
    >
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
    { props.selected && props.name }
    </li>
  );
}