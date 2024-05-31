import React from 'react'
import './skillsCard.scss'

export const SkillsCard = ({title,iconUrl,isActive,skillCardClick}) => {
  
    return (
    <div className={`skills-card ${isActive ? "active" : ""}`}
     onClick={skillCardClick}
    >
        <div className='skill-icon'>
            <img src={iconUrl} alt={title} />
        </div>
        <span>{title}</span>
    </div>
  )
}
