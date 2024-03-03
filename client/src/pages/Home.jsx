import React from 'react'

export const Home = () => {
  if(window.location.toString().includes("/")) {
    document.getElementById('topbar').style.display = 'none'
    document.getElementById('sidebar').style.display = 'none'
  }
  return (
    <></>
  )
}
