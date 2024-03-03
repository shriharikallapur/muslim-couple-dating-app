import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  if(window.location.toString().includes("/")) {
    document.getElementById('topbar').style.display = 'none'
    document.getElementById('sidebar').style.display = 'none'
  }
  return (
    <div className='w-screen h-screen flex'>
      <button className='m-auto bg-[#E94057] text-xl text-white px-10 py-3 rounded-md'>
        <Link
          to={'/login'}
        >
          Get Start
        </Link>
      </button>
    </div>
  )
}
