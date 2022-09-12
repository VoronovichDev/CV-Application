import React, { Component } from "react";

class Experience extends Component {
   constructor(props) {
      super(props)
      this.onExperienceChange = this.props.onExperienceChange
   }

   render() {
      return (
         <div>
            <form name="ExperienceForm">

               <label htmlFor="company">Company name: </label>
               <input
                  type="text"
                  id="company"
                  name="company"
                  onChange={this.onExperienceChange}
               />

               <label htmlFor="position">Position: </label>
               <input
                  type="text"
                  id="position"
                  name="position"
                  onChange={this.onExperienceChange}
               />

               <label htmlFor="tasks">Main tasks: </label>
               <input
                  type="text"
                  id="tasks"
                  name="tasks"
                  placeholder="list tasks separated by commas(',')"
                  onChange={this.onExperienceChange}
               />


               <label htmlFor="emplymentDate">Employment date: </label>
               <input
                  type="date"
                  id="emplymentDate"
                  name="emplymentDate"
                  onChange={this.onExperienceChange}
               />

               <label htmlFor="dismissalDate">Dismissal date: </label>
               <input
                  type="date"
                  id="dismissalDate"
                  name="dismissalDate"
                  onChange={this.onExperienceChange}
               />

            </form>
         </div>
      )
   }
}

export default Experience