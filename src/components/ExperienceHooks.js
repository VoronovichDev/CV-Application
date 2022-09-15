import React from "react";
import s from './Experience.module.css'


const ExperienceHooks = (props) => {
   const onExperienceChange = props.onExperienceChange

   return (
      <div className={s.experience}>
         <form name="ExperienceForm">

            <label htmlFor="company">Company name: </label>
            <input
               type="text"
               id="company"
               name="company"
               onChange={onExperienceChange}
               value={props.experience.company}
            />

            <label htmlFor="position">Position: </label>
            <input
               type="text"
               id="position"
               name="position"
               onChange={onExperienceChange}
               value={props.experience.position}

            />

            <label htmlFor="tasks">Main tasks: </label>
            <input
               type="text"
               id="tasks"
               name="tasks"
               placeholder="Please, list tasks separated by commas(',')"
               onChange={onExperienceChange}
               value={props.experience.tasks}
            />


            <label htmlFor="employmentDate">Employment date: </label>
            <input
               type="date"
               id="employmentDate"
               name="employmentDate"
               onChange={onExperienceChange}
               value={props.experience.employmentDate}
            />

            <label htmlFor="dismissalDate">Dismissal date: </label>
            <input
               type="date"
               id="dismissalDate"
               name="dismissalDate"
               onChange={onExperienceChange}
               value={props.experience.dismissalDate}

            />

         </form>
      </div>
   )
}


export default ExperienceHooks