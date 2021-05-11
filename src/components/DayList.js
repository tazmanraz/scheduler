import React from "react";
import DayListItem from "components/DayListItem";

export default function DayList(props) {

  return (
    <ul>
    {/* Alternatively could have done this logic before the return statement */}
      {props.days.map((day) => 
      <DayListItem
        name={day.name}
        spots={day.spots}
        selected={day.name === props.day}
        setDay={props.setDay} />
      )}
    </ul>
  )
}
