import React, { useState } from 'react'
import { Dropdown } from '../components/Dropdown'

export const Topbar = () => {
  const [userName, setUserName] = useState('Shrihari')
  const [userPic, setUserPic] = useState('./imgs/user-avatar.png')

  return (
    <div
      id='topbar'
      className='w-full h-[10dvh] justify-between items-center px-10'
      style={{display: 'none'}}
    >
      <h1 className='font-semibold text-2xl'>Hi, {userName}!</h1>
      <div className='flex'>
        <div className='border border-[#969697] rounded-lg w-96 h-[3rem]'>
          <input
            type="text"
            name=""
            id=""
            placeholder='Search your partners'
            className='w-full h-full rounded-lg bg-transparent px-3 text-xl outline-none'
          />
        </div>
        <Dropdown />
        <img src={userPic} alt="" className='w-[3rem] h-[3rem] ms-5 rounded-full cursor-pointer' />
      </div>
    </div>
  )
}
