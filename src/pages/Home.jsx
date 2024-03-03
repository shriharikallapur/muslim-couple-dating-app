import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
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
