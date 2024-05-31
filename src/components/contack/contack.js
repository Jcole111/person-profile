import React from 'react'
import './contack.scss'
import { ContackCard } from './contackCard/contackCard'
import phone from '../../assets/img/phone.png'
import mail from '../../assets/img/mail.png'
import { ContackForm } from './contackForm/contackForm'
export const Contack = () => {


  return (
    <section className='contack-container'  id="contack">  
        <h5>联系我</h5>
        <div className="contack-content">
           <div style={{flex:1}}>
           <ContackCard iconUrl={phone} text="13697778238(wx同电话)" />
           <ContackCard iconUrl={mail} text="875730607@qq.com" />
           </div>
           <div style={{flex:1}}>
           <ContackForm/>
            </div>
          
        </div>
    </section>
  )
}
