import React, { Component } from "react";
import s from './Education.module.css'

class Education extends Component {
   constructor(props) {
      super(props)
      this.onEducationChange = this.props.onEducationChange
   }

   render() {
      return (
         <div className={s.education}>
            <form name="EducationForm">

               <div className={s.school}>
                  <label htmlFor="school">School name: </label>
                  <input
                     type="text"
                     id="school"
                     name="school"
                     onChange={this.onEducationChange}
                     value={this.props.education.school}
                  />

                  <label htmlFor="schoolReceipt">Receipt date: </label>
                  <input
                     type="date"
                     id="schoolReceipt"
                     name="schoolReceipt"
                     onChange={this.onEducationChange}
                     value={this.props.education.schoolReceipt}
                  />

                  <label htmlFor="schoolGraduation">Graduation date: </label>
                  <input
                     type="date"
                     id="schoolGraduation"
                     name="schoolGraduation"
                     onChange={this.onEducationChange}
                     value={this.props.education.schoolGraduation}
                  />
               </div>

               <div className={s.institution}>
                  <label htmlFor="institution">Educational institution: </label>
                  <input
                     type="text"
                     id="institution"
                     name="institution"
                     onChange={this.onEducationChange}
                     value={this.props.education.institution}

                  />

                  <label htmlFor="institutionRecepit">Receipt date: </label>
                  <input
                     type="date"
                     id="institutionRecepit"
                     name="institutionRecepit"
                     onChange={this.onEducationChange}
                     value={this.props.education.institutionRecepit}
                  />

                  <label htmlFor="institutionGraduation">Graduation date: </label>
                  <input
                     type="date"
                     id="institutionGraduation"
                     name="institutionGraduation"
                     onChange={this.onEducationChange}
                     value={this.props.education.institutionGraduation}
                  />
               </div>

            </form>
         </div>
      )
   }
}

export default Education