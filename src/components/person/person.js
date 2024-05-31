import React from 'react'
import './person.scss'
import manLogo from '../../assets/img/header-img.svg'
import h5 from '../../assets/img/h5.png'
import css from '../../assets/img/css3.png'
import js from '../../assets/img/js.png'
import 'animate.css'

export const Person = () => {
  return (
    <div className='person-container' id="home">

        <div className='person-content'>
        <span className="tagline">欢迎来到我的个人介绍</span>
     <h2>Hi ! 我叫黄星源 </h2>
     <h2>希望成为一个Web工作者 </h2>
     <span className="tagline">React</span>
     <span className="tagline">Vue</span>
     <p>我对于前端工作拥有热情，对于生活和进步充满热情，涉足的爱好广泛十足！欢迎你来了解我！</p>
        </div>

        <div className='person-img-container'>
            <div className='animate__animated animate__slideInUp'>
                <div className='tech-icon-person animate__fadeIn'>
              <img className="manlogo" src={manLogo} alt="logo" />
                </div>
                <div className='tech-icons'>
                <div className='tech-icon'>
              <img   src={h5} alt="h5" />
              </div>
              <div className='tech-icon'>
              <img  src={css} alt="css" />
              </div>
              <div className='tech-icon '>
              <img   src={js} alt="js" />
              </div>
              </div>
            </div>
        </div>
    </div>
  )
}
