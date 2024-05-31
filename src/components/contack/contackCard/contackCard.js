import React from 'react'
import './contackCard.scss'
export const ContackCard = ({iconUrl,text}) => {
  return (
    <div className='contack-card'>
        <div className='contack-card-icon'>
            <img src={iconUrl} alt="icon" />
            </div>
            
            <p>{text}</p>
            
            </div>
  )
}
