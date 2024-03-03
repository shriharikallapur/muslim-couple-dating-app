import React from 'react'
export const Discover = () => {
  if(window.location.toString().includes("discover")) {
    document.getElementById('topbar').style.display = 'block'
    document.getElementById('sidebar').style.display = 'block'
  }
  return (
    <>
      <div>Discover</div>
    </>
    
  )
}
