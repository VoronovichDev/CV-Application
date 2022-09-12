import React, { Component } from "react";

class Education extends Component {
   constructor(props) {
      super(props)
      this.onEducationChange = this.props.onEducationChange
   }

   render() {
      return (
         <div>
            <form name="EducationForm">

               <div className="school">
                  <label htmlFor="school">School name: </label>
                  <input
                     type="text"
                     id="school"
                     name="school"
                     onChange={this.onEducationChange} />

                  <label htmlFor="receiptDateSchool">Receipt date: </label>
                  <input
                     type="date"
                     id="receiptDateSchool"
                     name="receiptDateSchool"
                     onChange={this.onEducationChange} />

                  <label htmlFor="graduationDateSchool">Graduation date: </label>
                  <input
                     type="date"
                     id="graduationDateSchool"
                     name="graduationDateSchool"
                     onChange={this.onEducationChange} />
               </div>

               <div className="institution">
                  <label htmlFor="institution">Educational institution: </label>
                  <input
                     type="text"
                     id="institution"
                     name="institution"
                     onChange={this.onEducationChange}
                  />

                  <label htmlFor="receiptDateInstitution">Receipt date: </label>
                  <input
                     type="date"
                     id="receiptDateInstitution"
                     name="receiptDateInstitution"
                     onChange={this.onEducationChange}
                  />

                  <label htmlFor="graduationDateInstitution">Graduation date: </label>
                  <input
                     type="date"
                     id="graduationDateInstitution"
                     name="graduationDateInstitution"
                     onChange={this.onEducationChange}
                  />
               </div>

            </form>
         </div>
      )
   }
}

export default Education