import React, { Component } from "react";
import s from './General.module.css'

class General extends Component {
   constructor(props) {
      super(props)
      this.onGeneralInfoChange = this.props.onGeneralInfoChange
   }

   render() {
      return (
         <div className={s.general}>
            <form name="GeneralForm">
               <label htmlFor="firstName">First name: </label>
               <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  onChange={this.onGeneralInfoChange}
                  value={this.props.generalInfo.firstName}
               />

               <label htmlFor="lastName">Last name: </label>
               <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  onChange={this.onGeneralInfoChange}
                  value={this.props.generalInfo.lastName}
               />

               <label htmlFor="phone">Phone: </label>
               <input
                  type="phone"
                  id="phone"
                  name="phone"
                  inputMode="tel"
                  onChange={this.onGeneralInfoChange}
                  value={this.props.generalInfo.phone}
               />
            </form>
         </div>
      )
   }
}

export default General