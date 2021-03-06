import React, { Component } from "react";
import Navbar from "./Navbar";
import FormField from "./FormField"
import CoolButton from "./CooButton"


class App extends Component {

  render() {
    return(
        <div>
            <Navbar/>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="password" type="password" placeholder="********************" />
            <CoolButton class="button is-success is-rounded is-success" buttonlabel="Click-me"></CoolButton>
        </div>
    )
  }
}

export default App;