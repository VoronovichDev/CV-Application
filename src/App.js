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

   }

   onGeneralInfoChange = (e) => {
      const target = e.target
      const parent = target.parentNode
      const value = target.value
      const name = target.name

      if (name === 'firstName') {
         this.setState({
            generalInfo: {
               [name]: value,
               lastName: parent.lastName.value,
               phone: parent.phone.value
            }
         })
      }
      if (name === 'lastName') {
         this.setState({
            generalInfo: {
               [name]: value,
               firstName: parent.firstName.value,
               phone: parent.phone.value
            }
         })
      }
      if (name === 'phone') {
         this.setState({
            generalInfo: {
               [name]: value,
               firstName: parent.firstName.value,
               lastName: parent.lastName.value
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
            <Education />
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
