// This button component is used in anywhere a button is required
// such as Form.js and Confirm.js under the appointment

import React from "react";
import "components/Button.scss";
import classnames from 'classnames/bind';

export default function Button(props) {

   // References SCSS with how a button should behave when hovered and such
   const buttonClass = classnames("button", {
      "button--confirm": props.confirm,
      "button--danger": props.danger
   });

   // The props.children deals with button text
   return (
      <button
         className={buttonClass}
         onClick={props.onClick}
         disabled={props.disabled}
      >
         {props.children}
      </button>
   );
}
