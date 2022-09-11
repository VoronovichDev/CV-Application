import React, { Component } from "react";


class General extends Component {
   constructor(props) {
      super(props)
   }

   render() {
      return (
         <div>
            <form name="GeneralForm">
               <label htmlFor="firstName">First name: </label>
               <input
                  type="text"
                  id="firstName" />

               <label htmlFor="firstName">Last name: </label>
               <input
                  type="text"
                  id="lastName" />

               <label htmlFor="phoneNumber">Phone: </label>
               <input
                  type="phone"
                  id="phoneNumber"
                  inputMode="tel" />
            </form>
         </div>
      )
   }
}

export default General