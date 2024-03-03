import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import authService from '../app/authService'
import { useDispatch } from "react-redux"
import { signin } from '../slices/authSlice'
import { useForm } from "react-hook-form"

export const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const [error, setError] = useState('')
  const [passwordHide, setPasswordHide] = useState(false)

  if(window.location.toString().includes("login")) {
    document.getElementById('topbar').style.display = 'none'
    document.getElementById('sidebar').style.display = 'none'
  }

  const login = async (data) => {
    setError('')
    try {
      const session = await authService.SignIn(data)
      console.log(session)
      if(session) {
        const userData = await authService.GetCurrentUser()
        if(userData) dispatch(signin(userData))
        navigate('/discover')
      }
      else (
        setError('Invalid Username or Password Please Try Again for Contact Dev Team')
      )
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <main className="flex w-full h-dvh">
      <div className="w-1/2 my-auto">
        <img
          src="./imgs/auth-img.png"
          alt=""
          width="600"
          className="ms-auto me-10 mb-5"
        />
        <h1 className="text-[#E94057] text-3xl w-[40rem] text-center ms-auto me-10">
          Say Hello to meaningful connections as our advanced matching algorithm
        </h1>
      </div>

      <div className="my-auto me-auto ms-10 w-[600px]">
        <div className="">
          <h1 className="text-[#E94057] text-5xl font-bold text-center my-2">
            Sign In here.
          </h1>
          <p className="text-[#E94057] text-base font-light text-center my-2">
            SignIn to discover your ideal partner.
          </p>
        </div>

        <form onSubmit={handleSubmit(login)}>
          <div className="w-[600px] mt-8">
            <label
              htmlFor='email'
              className="text-xl my-2"
            >
              Email
            </label>
            <div className="my-5 flex w-[600px] h-[48px] px-3 rounded-md border border-black">
              <input
                type="email"
                id='email'
                className="focus:outline-none text-xl w-[90%]"
                placeholder='Enter your email'
                {
                  ...register('email', {
                    required: true
                  })
                }
              />
              <img src="./imgs/icons/email-icon.png" className="m-auto" alt="" />
            </div>
          </div>

          <div className="w-[600px] mt-7">
            <div className='flex justify-between items-center mb-1'>
              <label
                htmlFor='password'
                className="text-xl my-2"
              >
                Password
              </label>
              
              <Link to={'/'} className="text-right text-[#E94057] text-sm cursor-pointer">
                Forgot password?
              </Link>

            </div>
            <div className="my-5 flex w-[600px] h-[48px] px-3 rounded-md border border-black">
              <input
                type={!passwordHide ? 'password' : 'text'}
                id='password'
                className="focus:outline-none text-xl w-[90%]"
                placeholder='Enter your password'
                {
                  ...register('password', {
                    required: true
                  })
                }
              />
              <button type="button" className="w-[10%]" onClick={() => setPasswordHide((curr) => curr === false ? true : false)}>
                {
                  passwordHide ?
                    <img src="./imgs/icons/open-eye-icon.png" className="m-auto" alt="" />
                  : <img src="./imgs/icons/close-eye-icon.png" className="m-auto" alt="" />
                }
              </button>
            </div>
          </div>

          <div className='py-8'>
            <button
              type="submit"
              className="w-[600px] h-[48px] text-center bg-[#E94057] text-white rounded-md my-5"
            >
              Continue
            </button>
          </div>
        </form>

        <div>
          <Link to={'/signup'}>
            <p className="text-sm text-center my-20">
              Don't have an account? <span className="text-[#E94057]">Register</span>
            </p>
          </Link>
        </div>
      </div>
    </main>
  )
}
