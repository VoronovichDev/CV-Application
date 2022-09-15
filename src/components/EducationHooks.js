import React from "react";
import s from './Education.module.css'

const EducationHooks = (props) => {
   const onEducationChange = props.onEducationChange

   return (
      <div className={s.education}>
         <form name="EducationForm">

            <div className={s.school}>
               <label htmlFor="school">School name: </label>
               <input
                  type="text"
                  id="school"
                  name="school"
                  onChange={onEducationChange}
                  value={props.education.school}
               />

               <label htmlFor="schoolReceipt">Receipt date: </label>
               <input
                  type="date"
                  id="schoolReceipt"
                  name="schoolReceipt"
                  onChange={onEducationChange}
                  value={props.education.schoolReceipt}
               />

               <label htmlFor="schoolGraduation">Graduation date: </label>
               <input
                  type="date"
                  id="schoolGraduation"
                  name="schoolGraduation"
                  onChange={onEducationChange}
                  value={props.education.schoolGraduation}
               />
            </div>

            <div className={s.institution}>
               <label htmlFor="institution">Educational institution: </label>
               <input
                  type="text"
                  id="institution"
                  name="institution"
                  onChange={onEducationChange}
                  value={props.education.institution}

               />

               <label htmlFor="institutionRecepit">Receipt date: </label>
               <input
                  type="date"
                  id="institutionRecepit"
                  name="institutionRecepit"
                  onChange={onEducationChange}
                  value={props.education.institutionRecepit}
               />

               <label htmlFor="institutionGraduation">Graduation date: </label>
               <input
                  type="date"
                  id="institutionGraduation"
                  name="institutionGraduation"
                  onChange={onEducationChange}
                  value={props.education.institutionGraduation}
               />
            </div>

         </form>
      </div>
   )
}

export default EducationHooks