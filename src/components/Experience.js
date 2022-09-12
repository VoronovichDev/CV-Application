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
                  value={this.props.experience.company}
               />

               <label htmlFor="position">Position: </label>
               <input
                  type="text"
                  id="position"
                  name="position"
                  onChange={this.onExperienceChange}
                  value={this.props.experience.position}

               />

               <label htmlFor="tasks">Main tasks: </label>
               <input
                  type="text"
                  id="tasks"
                  name="tasks"
                  placeholder="list tasks separated by commas(',')"
                  onChange={this.onExperienceChange}
                  value={this.props.experience.tasks}
               />


               <label htmlFor="employmentDate">Employment date: </label>
               <input
                  type="date"
                  id="employmentDate"
                  name="employmentDate"
                  onChange={this.onExperienceChange}
                  value={this.props.experience.emplymentDate}
               />

               <label htmlFor="dismissalDate">Dismissal date: </label>
               <input
                  type="date"
                  id="dismissalDate"
                  name="dismissalDate"
                  onChange={this.onExperienceChange}
                  value={this.props.experience.dismissalDate}

               />

            </form>
         </div>
      )
   }
}

export default Experience