import React, { Component } from "react";
import avatar from '../img/avatar.svg'
import s from './Cv.module.css'


class Cv extends Component {
   constructor(props) {
      super(props)
      this.state = this.props.stateApp

      this.onSubmitCv = this.onSubmitCv.bind(this)
      this.onEditCv = this.onEditCv.bind(this)
   }


   onSubmitCv = (e) => {
      this.props.toggleOnSubmitCv()

      this.setState({
         generalInfo: this.state.generalInfo,
         education: this.state.education,
         experience: this.state.experience,
      })
   }


   onEditCv = (e) => {
      this.props.toggleOnEditCv()
   }

   render() {
      return (
         <div className={s.cv}>
            <div className={s.buttons}>
               <button className={s.submit_cv} onClick={this.onSubmitCv}>Submit</button>
               <button className={s.edit_cv} onClick={this.onEditCv}>Edit</button>
            </div>
            <img src={avatar} className={s.avatar} />
            <div className={s.general}>
               <p className={s.firstName}>First name: {this.state.generalInfo.firstName}</p>
               <p className={s.lastName}>Last name: {this.state.generalInfo.lastName}</p>
               <p className={s.phone}>Tel.: {this.state.generalInfo.phone}</p>
            </div>
            <div className={s.education}>
               <p className={s.school}>School name: {this.state.education.school}</p>
               <p className={s.school_start}>Started studying: {this.state.education.schoolReceipt}</p>
               <p className={s.school_end}>Graduated: {this.state.education.schoolGraduation}</p>
               <hr className={s.line} />
               <p className={s.institution}>Institution name: {this.state.education.institution}</p>
               <p className={s.institution_start}>Started studying: {this.state.education.institutionRecepit}</p>
               <p className={s.institution_end}>Graduated: {this.state.education.institutionGraduation}</p>
            </div>
            <div className={s.experience}>
               <p className={s.company}>Company name: {this.state.experience.company}</p>
               <p className={s.position}>position: {this.state.experience.position}</p>
               <p className={s.tasks}>Main tasks: {this.state.experience.tasks}</p>
               <p className={s.company_start}>Employment Date: {this.state.experience.employmentDate}</p>
               <p className={s.company_end}>Dismissal Date: {this.state.experience.dismissalDate}</p>

            </div>
         </div>
      )
   }
}

export default Cv