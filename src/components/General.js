import React, { Component } from "react";


class General extends Component {
   constructor(props) {
      super(props)
      this.onGeneralInfoChange = this.props.onGeneralInfoChange
   }

   render() {
      return (
         <div>
            <form name="GeneralForm">
               <label htmlFor="firstName">First name: </label>
               <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  onChange={this.onGeneralInfoChange}
               />

               <label htmlFor="lastName">Last name: </label>
               <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  onChange={this.onGeneralInfoChange}
               />

               <label htmlFor="phone">Phone: </label>
               <input
                  type="phone"
                  id="phone"
                  name="phone"
                  inputMode="tel"
                  onChange={this.onGeneralInfoChange}
               />
            </form>
         </div>
      )
   }
}

export default General