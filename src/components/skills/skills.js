import React from 'react'
import './skills.scss'
import  {SkillsCard} from './skillsCard/skillsCard'
import { SKILLS } from '../../utils/data'
import{ SkillsInfo} from './skillsInfo/skillsInfo'
import { useState } from 'react'
export const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0])
  const handleCardClick = (data)=>{
setSelectedSkill(data)
  }
  return (
   <section className='skills-container'  id="skills">

   <h5>专业技能</h5>
   <div className='skills-content'>

<div className='skills'>
{SKILLS.map((item)=>
    <SkillsCard
    key={item.title}
    iconUrl={item.icon}
    title={item.title}
    skillCardClick={()=>{handleCardClick(item)}}
    isActive={selectedSkill.title === item.title}
    />    
)}
</div>

<div className='skills-info'>
<SkillsInfo
header={selectedSkill.title}
info={selectedSkill.skills}
/>
</div>

   </div>

   </section>
  )
}
