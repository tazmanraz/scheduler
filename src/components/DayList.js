// This component holds all the days current information such as
// day ID and spots available. This info gets passed down to DayistItem

import React from "react";
import DayListItem from "components/DayListItem";

export default function DayList(props) {
  return (
    <ul>
      {
        props.days.map((day) =>
          <DayListItem
            key={day.id}
            name={day.name}
            spots={day.spots}
            selected={day.name === props.day}
            setDay={props.setDay} />
        )
      }
    </ul>
  )
}
