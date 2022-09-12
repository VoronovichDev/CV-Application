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
            employmentDate: '',
            dismissalDate: '',
         },
      }

      this.onGeneralInfoChange = this.onGeneralInfoChange.bind(this)
      this.onEducationChange = this.onEducationChange.bind(this)
      this.onExperienceChange = this.onExperienceChange.bind(this)
   }

   onGeneralInfoChange = (e) => {
      const target = e.target
      const value = target.value
      const name = target.name

      this.setState({
         generalInfo: {
            ...this.state.generalInfo,
            [name]: value,
         }
      })

      console.log(value)
   }

   onEducationChange = (e) => {
      const target = e.target
      const value = target.value
      const name = target.name

      this.setState({
         education: {
            ...this.state.education,
            [name]: value,
         }
      })
   }

   onExperienceChange = (e) => {
      const target = e.target
      const value = target.value
      const name = target.name

      this.setState({
         experience: {
            ...this.state.experience,
            [name]: value,
         }
      })
   }

   render() {
      return (
         <div>
            <General
               onGeneralInfoChange={this.onGeneralInfoChange}
               generalInfo={this.state.generalInfo}
            />
            <Education
               onEducationChange={this.onEducationChange}
               education={this.state.education}

            />
            <Experience
               onExperienceChange={this.onExperienceChange}
               experience={this.state.experience}
            />
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
