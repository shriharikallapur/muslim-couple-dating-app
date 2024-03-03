import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export const AuthLayout = ({children, authentication = true}) => {
  const authStatus = useSelector((state) => state.auth.status)
  
  const navigate = useNavigate()
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    let path = (authentication && authStatus !== authentication) ?
                  '/login' :
                (!authentication && authStatus !== authentication && window.location.href.indexOf("signup") === 22) ?
                  '/user-profile' :
                (!authentication && authStatus !== authentication && window.location.href.indexOf("login") > -1) ?
                '/discover' : ''
    console.log(path)
    navigate(path)
    setLoader(false)
  }, [authStatus, authentication, navigate])

  return loader ? null : <>{children}</>
}