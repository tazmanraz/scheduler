import React from "react";
import "components/InterviewerList.scss";
import "components/InterviewerListItem.scss";
import classnames from 'classnames/bind';
import InterviewerListItem from "./InterviewerListItem";

export default function InterviewerList(props) {

  // const interviewerClass = classnames("interviewers__item", {
  //   "interviewers__item--selected": props.selected,
  // });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      
      
      <ul className="interviewers__list">
      {props.interviewers.map((person) => 
        <InterviewerListItem
          key = {person.id}
          name = {person.name}
          avatar = {person.avatar}
          selected = {person.id === props.interviewer}
          setInterviewer = {props.setInterviewer}
        />
      )}

      </ul>
    </section>
  );
}