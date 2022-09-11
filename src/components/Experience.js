import React, { Component } from "react";

class Experience extends Component {
   constructor(props) {
      super(props)
   }

   render() {
      return (
         <div>
            <form name="ExperienceForm">

               <label htmlFor="companyName">Company name: </label>
               <input
                  type="text"
                  id="companyName" />

               <label htmlFor="position">Position: </label>
               <input
                  type="text"
                  id="position " />

               <label htmlFor="mainTasks">Main tasks: </label>
               <input type="text" id="mainTasks" />


               <label htmlFor="emplymentDate">Employment date: </label>
               <input type="date" id="emplymentDate" />

               <label htmlFor="dismissalDate">Dismissal date: </label>
               <input type="date" id="dismissalDate" />

            </form>
         </div>
      )
   }
}

export default Experience