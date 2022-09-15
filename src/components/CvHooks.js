import React, { useState } from "react";
import avatar from '../img/avatar.svg'
import s from './Cv.module.css'


const CvHooks = (props) => {

   const [generalInfoCv, setGeneralInfoCv] = useState(props.generalInfo)
   const [educationCv, setEducationCv] = useState(props.education)
   const [experienceCv, setExperienceCv] = useState(props.experience)

   const toggleOnSubmitCv = props.toggleOnSubmitCv
   const toggleOnEditCv = props.toggleOnEditCv

   const onSubmitCv = (e) => {
      toggleOnSubmitCv()

      setGeneralInfoCv(generalInfoCv)
      setEducationCv(educationCv)
      setExperienceCv(experienceCv)
   }

   const onEditCv = (e) => {
      toggleOnEditCv()
   }


   return (
      <div className={s.cv}>
         <div className={s.buttons}>
            <button className={s.submit_cv} onClick={onSubmitCv}>Submit</button>
            <button className={s.edit_cv} onClick={onEditCv}>Edit</button>
         </div>
         <img src={avatar} className={s.avatar} alt="avatar" />
         <div className={s.general}>
            <p className={s.firstName}>First name: {generalInfoCv.firstName}</p>
            <p className={s.lastName}>Last name: {generalInfoCv.lastName}</p>
            <p className={s.phone}>Tel.: {generalInfoCv.phone}</p>
         </div>
         <div className={s.education}>
            <p className={s.school}>School name: {educationCv.school}</p>
            <p className={s.school_start}>Started studying: {educationCv.schoolReceipt}</p>
            <p className={s.school_end}>Graduated: {educationCv.schoolGraduation}</p>
            <hr className={s.line} />
            <p className={s.institution}>Institution name: {educationCv.institution}</p>
            <p className={s.institution_start}>Started studying: {educationCv.institutionRecepit}</p>
            <p className={s.institution_end}>Graduated: {educationCv.institutionGraduation}</p>
         </div>
         <div className={s.experience}>
            <p className={s.company}>Company name: {experienceCv.company}</p>
            <p className={s.position}>Position: {experienceCv.position}</p>
            <p className={s.tasks}>Main tasks: {experienceCv.tasks}</p>
            <p className={s.company_start}>Employment Date: {experienceCv.employmentDate}</p>
            <p className={s.company_end}>Dismissal Date: {experienceCv.dismissalDate}</p>

         </div>
      </div>
   )

}


export default CvHooks