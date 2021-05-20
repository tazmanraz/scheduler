// This component works closely with the DayList and displays
// information about the each day's spots

import React from "react";
import "components/DayListItem.scss";
import classnames from 'classnames/bind';

export default function DayListItem(props) {

  //Function for formatting the spots text
  const formatSpots = () => {
    if (props.spots > 1) {
      return `${props.spots} spots remaining`;
    } else if (props.spots === 1) {
      return `${props.spots} spot remaining`;
    } else {
      return `no spots remaining`;
    }
  }

  // References SCSS with how a days should behave when hovered based on spots available
  const dayClass = classnames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  });


  return (
    <li
      data-testid="day"
      className={dayClass}
      onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}