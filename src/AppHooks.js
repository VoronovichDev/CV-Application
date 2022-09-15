import React, { useState } from "react";
import GeneralHooks from "./components/GeneralHooks";
import EducationHooks from "./components/EducationHooks";
import ExperienceHooks from "./components/ExperienceHooks"
import CvHooks from "./components/CvHooks";

import s from './App.module.css'

const AppHooks = () => {

   const [generalInfo, setGeneralInfo] = useState({
      firstName: '',
      lastName: '',
      phone: '',
   })
   const [education, setEducation] = useState({
      school: '',
      schoolReceipt: '',
      schoolGraduation: '',
      institution: '',
      institutionRecepit: '',
      institutionGraduation: '',
   })
   const [experience, setExperience] = useState({
      company: '',
      position: '',
      tasks: '',
      employmentDate: '',
      dismissalDate: '',
   })
   const [isEditing, setIsEditing] = useState(true)

   const onGeneralInfoChange = (e) => {
      const target = e.target
      const value = target.value
      const name = target.name
      setGeneralInfo({
         ...generalInfo,
         [name]: value,
      })
   }

   const onEducationChange = (e) => {
      const target = e.target
      const value = target.value
      const name = target.name
      setEducation({
         ...education,
         [name]: value,
      })
   }

   const onExperienceChange = (e) => {
      const target = e.target
      const value = target.value
      const name = target.name
      setExperience({
         ...experience,
         [name]: value,
      })
   }

   const toggleOnSubmitCv = (e) => {
      setIsEditing(
         false,
      )
   }

   const toggleOnEditCv = (e) => {
      setIsEditing(
         true
      )
   }


   if (isEditing) {
      return (
         <div className={s.container}>
            <GeneralHooks
               onGeneralInfoChange={onGeneralInfoChange}
               generalInfo={generalInfo}
            />
            <EducationHooks
               onEducationChange={onEducationChange}
               education={education}
            />
            <ExperienceHooks
               onExperienceChange={onExperienceChange}
               experience={experience}
            />
            <CvHooks
               generalInfo={generalInfo}
               education={education}
               experience={experience}
               toggleOnSubmitCv={toggleOnSubmitCv}
               toggleOnEditCv={toggleOnEditCv}
            />
         </div>
      )
   }
   return <div className={s.container}>
      <CvHooks
         generalInfo={generalInfo}
         education={education}
         experience={experience}
         toggleOnSubmitCv={toggleOnSubmitCv}
         toggleOnEditCv={toggleOnEditCv}
         isEditing={isEditing}
      />
   </div>
}

export default AppHooks;
