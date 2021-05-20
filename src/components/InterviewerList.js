// This component deals with the array of interviewers

import React from "react";
import "components/InterviewerList.scss";
import "components/InterviewerListItem.scss";
import classnames from 'classnames/bind';
import InterviewerListItem from "./InterviewerListItem";

import PropTypes from 'prop-types';


export default function InterviewerList(props) {

  const interviewerClass = classnames("interviewers__item", {
    "interviewers__item--selected": props.selected,
  });

  // Creates the interviewers list for the particular day
  const interviewers = props.interviewers.map(interviewer => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.interviewer}
        setInterviewer={event => props.setInterviewer(interviewer.id)}
      />
    );
  });

  return (
    <section className={interviewerClass}>
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
      {interviewers}
      </ul>
    </section>
  );

}

// Ensures interviewers list is sent as an array
InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};