import React, { Component } from "react";
import avatar from '../img/avatar.svg'
import s from './Cv.module.css'


class Cv extends Component {
   constructor(props) {
      super(props)

      this.generalInfo = this.props.generalInfo;
      this.education = this.props.education;
      this.experience = this.props.experience;

   }

   render() {
      return (
         <div className={s.cv}>
            <div className={s.buttons}>
               <button className={s.submit_cv}>Submit</button>
               <button className={s.edit_cv}>Edit</button>
            </div>
            <img src={avatar} className={s.avatar} />
            <div className={s.general}>
               <p>General lnformation about employee</p>
            </div>
            <div className={s.education}>
               <p>Information about employee's education</p>
            </div>
            <div className={s.experience}>
               <p>Information about employee's experience</p>
            </div>
         </div>
      )
   }
}

export default Cv