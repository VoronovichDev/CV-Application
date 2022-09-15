import React from "react";
import s from './General.module.css'


const General = (props) => {

   const onGeneralInfoChange = props.onGeneralInfoChange

   return (
      <div className={s.general}>
         <form name="GeneralForm">
            <label htmlFor="firstName">First name: </label>
            <input
               type="text"
               id="firstName"
               name="firstName"
               onChange={onGeneralInfoChange}
               value={props.generalInfo.firstName}
            />

            <label htmlFor="lastName">Last name: </label>
            <input
               type="text"
               id="lastName"
               name="lastName"
               onChange={onGeneralInfoChange}
               value={props.generalInfo.lastName}
            />

            <label htmlFor="phone">Phone: </label>
            <input
               type="phone"
               id="phone"
               name="phone"
               inputMode="tel"
               onChange={onGeneralInfoChange}
               value={props.generalInfo.phone}
            />
         </form>
      </div>
   )
}

export default General