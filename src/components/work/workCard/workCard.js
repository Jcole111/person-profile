import React from 'react'
import './workCard.scss'
export const WorkCard = ({workInfo}) => {
  return (
    <div className='work-card-container'>

<h6>公司名称 : {workInfo.company}</h6>
<div className='work-date'>{workInfo.date}</div>
<p>{workInfo.mission}</p>
<p>{workInfo.learn}</p>
    </div>
  )
}
