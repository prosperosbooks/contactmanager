import React, { Component } from "react";
import Contact from "./Contact"; // inherit Contact component here. Access through props assignment.
import { Consumer } from "../../context";

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            // <> = React.Fragment
            // fragments are one less div on node tree, save memory, better with CSS parent-child
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact </span>
                List
              </h1>
              {contacts.map(contact => (
                // you cant directly access keys inside objects inside arrays unless you loop through the array (e.g., map, filter)
                // iterate through this.state.contacts array
                //each index becomes a new variable that gives you access to object keys and ultimately state values

                <Contact
                  // new PROPS = state values
                  key={contact.id} // pass ID from current index of state to new PROPS
                  retrieveContact={contact} // pass NAME, EMAIL, PHONE from current index of state to new PROPS
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
