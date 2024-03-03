import React from 'react'
export const Discover = () => {
  if(window.location.toString().includes("discover")) {
    document.getElementById('topbar').style.display = 'block'
    document.getElementById('sidebar').style.display = 'block'
  }
  return (
    <div className='h-[90dvh] flex justify-center items-center'>
      <div>
        <h1 className='text-5xl text-center'>Under Development</h1>
        <p >please check the subscription page and don't click the "Buy Plan" Button</p>
      </div>
    </div>
  )
}
