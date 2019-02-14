

import React, { Component } from "react";
const CoolButton = (props) => {
    return(
        <div>
            <button className={props.class}>{props.buttonlabel}</button>
        </div>
        )    
  }
export default CoolButton;
