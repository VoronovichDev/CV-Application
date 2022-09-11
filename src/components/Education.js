import React, { Component } from "react";

class Education extends Component {
   constructor(props) {
      super(props)
   }

   render() {
      return (
         <div>
            <form name="EducationForm">

               <div className="school">
                  <label htmlFor="school">School name: </label>
                  <input
                     type="text"
                     id="school" />

                  <label htmlFor="receiptDateSchool">Receipt date: </label>
                  <input
                     type="date"
                     id="receiptDateSchool" />

                  <label htmlFor="graduationDateSchool">Graduation date: </label>
                  <input
                     type="date"
                     id="graduationDateSchool" />
               </div>

               <div className="institution">
                  <label htmlFor="institution">Educational institution: </label>
                  <input
                     type="text"
                     id="institution" />

                  <label htmlFor="receiptDateInstitution">Receipt date: </label>
                  <input
                     type="date"
                     id="receiptDateInstitution" />

                  <label htmlFor="graduationDateInstitution">Graduation date: </label>
                  <input
                     type="date"
                     id="graduationDateInstitution" />
               </div>

            </form>
         </div>
      )
   }
}

export default Education