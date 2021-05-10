import React from "react";
import "components/DayListItem.scss";
import classnames from 'classnames/bind';

export default function DayListItem(props) {

  const dayClass = classnames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots===0
  });


  return (
    // <li>
    //   <h2 className="text--regular">Day Name</h2> 
    //   <h3 className="text--light">X spots remaining</h3>
    // </li>

    <li
    className={dayClass} 
    onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{props.spots}</h3>
    </li>
  );
}