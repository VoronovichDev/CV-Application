import React, { Component } from "react";
import avatar from '../img/avatar.svg'
import s from './Cv.module.css'


class Cv extends Component {
   constructor(props) {
      super(props)
   }

   render() {
      return (
         <div className={s.mock_cv}>
            <img src={avatar} />
            <div className={s.mock_info}>
               <p>Information about employee's education</p>
               <p>Information about employee's experience</p>
               <p>General lnformation about employee</p>
            </div>
         </div>
      )
   }
}

export default Cv