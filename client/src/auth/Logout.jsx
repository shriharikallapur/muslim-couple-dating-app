import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import authService from "../app/authService";
import { signout } from "../slices/authSlice";

export const Logout = () => {
  const [hover, setHover] = useState(false)
  const dispatch = useDispatch()
  const logoutHandler = () => {
    authService.SignOut().then(() => {
      dispatch(signout())
    })
  }
  return (
    <button
      type="button"
      className='text-lg font-bold'
      onClick={logoutHandler}
      onMouseEnter={() => setHover((current) => current === false ? true : false )}
    >
      {
        hover ?
          <img src="./imgs/icons/logout-icon-active.png" alt=""/>
        : <img src="./imgs/icons/logout-icon.png" alt=""/>
      }
    </button>
  )
}