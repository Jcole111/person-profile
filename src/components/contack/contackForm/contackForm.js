import React from 'react'
import './contackForm.scss'
export const ContackForm = () => {
  return (
    <div className='contack-form-content'>

<form action="">
  <input type="text" name="name" placeholder='请输入您的称呼'></input>
  <input type="text" name="contack" placeholder='请输入微信号或邮箱'></input>
  <textarea type="text" name="message" placeholder='请输入要对我说的话...'></textarea>
  <button>发送</button>
</form>

    </div>
  )
}
