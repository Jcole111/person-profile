import React from 'react'
import './contackForm.scss'
export const ContackForm = () => {
  return (
    <div className='contack-form-content'>

<form action="">
  <input type="text" name="name" placeholder='如果你对我感兴趣，通过左边的联系方式联系我吧！'></input>
  <input type="text" name="contack" placeholder='希望我们的相遇能够为你的生活增添一点色彩！'></input>
  <textarea type="text" name="message" placeholder='其他功能尽情期待~'></textarea>
  <button>祝你生活，工作愉快！每天都有开心的时刻！</button>
</form>

    </div>
  )
}
