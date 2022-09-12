import React, { Component } from "react";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Cv from "./components/Cv";

class App extends Component {
   constructor(props) {
      super(props)

      this.state = {
         generalInfo: {
            firstName: '',
            lastName: '',
            phone: '',
         },
         education: {
            school: '',
            schoolReceipt: '',
            schoolGraduation: '',
            institution: '',
            institutionRecepit: '',
            institutionGraduation: '',
         },
         experience: {
            company: '',
            position: '',
            tasks: '',
            emplymentDate: '',
            dismissalDate: '',
         },
      }
      this.onGeneralInfoChange = this.onGeneralInfoChange.bind(this)
      this.onEducationChange = this.onEducationChange.bind(this)
   }

   onGeneralInfoChange = (e) => {
      const target = e.target
      const value = target.value
      const name = target.name

      if (name === 'firstName') {
         this.setState({
            generalInfo: {
               [name]: value,
               lastName: this.state.generalInfo.lastName,
               phone: this.state.generalInfo.phone,
            }
         })
      }
      if (name === 'lastName') {
         this.setState({
            generalInfo: {
               [name]: value,
               firstName: this.state.generalInfo.firstName,
               phone: this.state.generalInfo.phone,
            }
         })
      }
      if (name === 'phone') {
         this.setState({
            generalInfo: {
               [name]: value,
               lastName: this.state.generalInfo.lastName,
               firstName: this.state.generalInfo.firstName,
            }
         })
      }

   }

   onEducationChange = (e) => {
      const target = e.target
      const value = target.value
      const name = target.name

      if (name === 'school') {
         this.setState({
            education: {
               school: value,
               schoolReceipt: this.state.education.schoolReceipt,
               schoolGraduation: this.state.education.schoolGraduation,
               institution: this.state.education.institution,
               institutionRecepit: this.state.education.institutionRecepit,
               institutionGraduation: this.state.education.institutionGraduation,
            }
         })
      }
      if (name === 'receiptDateSchool') {
         this.setState({
            education: {
               schoolReceipt: value,
               school: this.state.education.school,
               schoolGraduation: this.state.education.schoolGraduation,
               institution: this.state.education.institution,
               institutionRecepit: this.state.education.institutionRecepit,
               institutionGraduation: this.state.education.institutionGraduation,
            }
         })
      }
      if (name === 'graduationDateSchool') {
         this.setState({
            education: {
               schoolGraduation: value,
               school: this.state.education.school,
               schoolReceipt: this.state.education.schoolReceipt,
               institution: this.state.education.institution,
               institutionRecepit: this.state.education.institutionRecepit,
               institutionGraduation: this.state.education.institutionGraduation,
            }
         })
      }
      if (name === 'institution') {
         this.setState({
            education: {
               institution: value,
               school: this.state.education.school,
               schoolReceipt: this.state.education.schoolReceipt,
               schoolGraduation: this.state.education.schoolGraduation,
               institutionRecepit: this.state.education.institutionRecepit,
               institutionGraduation: this.state.education.institutionGraduation,
            }
         })
      }
      if (name === 'receiptDateInstitution') {
         this.setState({
            education: {
               institutionRecepit: value,
               school: this.state.education.school,
               schoolReceipt: this.state.education.schoolReceipt,
               schoolGraduation: this.state.education.schoolGraduation,
               institution: this.state.education.institution,
               institutionGraduation: this.state.education.institutionGraduation,
            }
         })
      }
      if (name === 'graduationDateInstitution') {
         this.setState({
            education: {
               institutionGraduation: value,
               school: this.state.education.school,
               schoolReceipt: this.state.education.schoolReceipt,
               schoolGraduation: this.state.education.schoolGraduation,
               institution: this.state.education.institution,
               institutionRecepit: this.state.education.institutionRecepit,
            }
         })
      }

   }


   render() {
      return (
         <div>
            <General
               onGeneralInfoChange={this.onGeneralInfoChange}
            />
            <Education
               onEducationChange={this.onEducationChange}
            />
            <Experience />
            <div className="buttons">
               <button id="submitCv">Submit</button>
               <button id='editCv'>Edit</button>
            </div>
            <Cv
               generalInfo={this.state.generalInfo}
               education={this.state.education}
               experience={this.state.experience}
            />

         </div>
      )

   }
}

export default App;
