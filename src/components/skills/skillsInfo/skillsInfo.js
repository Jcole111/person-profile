import React from 'react'
import './skillsInfo.scss'

export const SkillsInfo = ({header,info}) => {
  return (
    <div className='skill-info-container'>
      <h6>{header}</h6>
      <div className='skill-info-content'>
      <p>
        {info}
      </p>
      </div>
      
    </div>
  )
}
