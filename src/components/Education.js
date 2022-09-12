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

                  <label htmlFor="schoolReceipt">Receipt date: </label>
                  <input
                     type="date"
                     id="schoolReceipt"
                     name="schoolReceipt"
                     onChange={this.onEducationChange} />

                  <label htmlFor="schoolGraduation">Graduation date: </label>
                  <input
                     type="date"
                     id="schoolGraduation"
                     name="schoolGraduation"
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

                  <label htmlFor="institutionRecepit">Receipt date: </label>
                  <input
                     type="date"
                     id="institutionRecepit"
                     name="institutionRecepit"
                     onChange={this.onEducationChange}
                  />

                  <label htmlFor="institutionGraduation">Graduation date: </label>
                  <input
                     type="date"
                     id="institutionGraduation"
                     name="institutionGraduation"
                     onChange={this.onEducationChange}
                  />
               </div>

            </form>
         </div>
      )
   }
}

export default Education