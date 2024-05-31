import React, { useRef } from 'react'
import './work.scss'
import { WorkCard } from './workCard/workCard'
import { WORK } from '../../utils/data'
import Slider from "react-slick";
import 'material-symbols'

export const Work = () => {
  const slideRef = useRef(null)
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
  };
  const rightClick = ()=>{
    slideRef.current.slickNext()
  }
  const leftClick = ()=>{
        slideRef.current.slickPrev()
  }
  return (
    <section className='work-container'  id="work">
  <h5>工作经历</h5>
  <div className='work-container-content'>
    <div className='arrow-right' onClick={rightClick} >
      <span className='material-symbols-outlined'>chevron_right</span>
    </div>
    <div className='arrow-left'  onClick={leftClick}>
      <span className='material-symbols-outlined'>chevron_left</span>
    </div>
  <Slider ref={slideRef} {...settings}>
   {WORK.map(item=><WorkCard key={item.company} workInfo={item}/>)}
   </Slider>
  </div>

    </section>
  )
}
