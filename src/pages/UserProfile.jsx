import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom'
import dbServices from '../app/dbService'

const Fields = [
  {
    id: '1',
    htmlFor: 'name',
    labelName: 'Full Name',
    type: 'text',
    inputId: 'name',
    placeholder: 'full name',
    hookFormfieldName: 'name',
  },
  {
    id: '2',
    htmlFor: 'age',
    labelName: 'Age',
    type: 'text',
    inputId: 'age',
    placeholder: 'age',
    hookFormfieldName: 'age',
  },
  {
    id: '3',
    htmlFor: 'nationality',
    labelName: 'Nationality',
    type: 'text',
    inputId: 'nationality',
    placeholder: 'Nationality',
    hookFormfieldName: 'nationality',
  },
  {
    id: '4',
    htmlFor: 'originalCountry',
    labelName: 'Original Country',
    type: 'text',
    inputId: 'originalCountry',
    placeholder: 'original country',
    hookFormfieldName: 'originalCountry',
  },
  {
    id: '5',
    htmlFor: 'tribe',
    labelName: 'Tribe',
    type: 'text',
    inputId: 'tribe',
    placeholder: 'tribe name',
    hookFormfieldName: 'tribe',
  },
  {
    id: '6',
    htmlFor: 'height',
    labelName: 'Height',
    type: 'text',
    inputId: 'height',
    placeholder: 'Height',
    hookFormfieldName: 'height',
  },
  {
    id: '7',
    htmlFor: 'job',
    labelName: 'Job',
    type: 'text',
    inputId: 'job',
    placeholder: 'job',
    hookFormfieldName: 'job',
  },
  {
    id: '8',
    htmlFor: 'currResidence',
    labelName: 'Current Place of Residence',
    type: 'text',
    inputId: 'currResidence',
    placeholder: 'current place of residence',
    hookFormfieldName: 'currResidence',
  },
  {
    id: '9',
    htmlFor: 'study',
    labelName: 'Study',
    type: 'text',
    inputId: 'study',
    placeholder: 'study',
    hookFormfieldName: 'study',
  },
  {
    id: '10',
    htmlFor: 'financialStatus',
    labelName: 'Financial Status',
    type: 'text',
    inputId: 'financialStatus',
    placeholder: 'financial status',
    hookFormfieldName: 'financialStatus',
  },
  {
    id: '11',
    htmlFor: 'marriedBefore',
    labelName: 'Married before',
    type: 'text',
    inputId: 'marriedBefore',
    placeholder: 'marriedBefore',
    hookFormfieldName: 'marriedBefore',
  },
  {
    id: '12',
    htmlFor: 'children',
    labelName: 'Do you have children',
    type: 'text',
    inputId: 'children',
    placeholder: 'children',
    hookFormfieldName: 'children',
  },
  {
    id: '13',
    htmlFor: 'partnerSpecificationDetail',
    labelName: `Your life partner's specifications in detail`,
    type: 'text',
    inputId: 'partnerSpecificationDetail',
    placeholder: 'partnerSpecificationDetail',
    hookFormfieldName: 'partnerSpecificationDetail',
  },
  {
    id: '14',
    htmlFor: 'aboutYou',
    labelName: 'About you',
    type: 'text',
    inputId: 'aboutYou',
    placeholder: 'aboutYou',
    hookFormfieldName: 'aboutYou',
  }
]

export const UserProfile = () => {
  const [userPic, setUserPic] = useState('')
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()
  const [selected, setSelected] = useState('no')

  if(window.location.toString().includes("user-profile")) {
    document.getElementById('topbar').style.display = 'flex'
    document.getElementById('sidebar').style.display = 'none'
  }

  const userDetails = async (data) => {
    data.userID = Math.random().toString(16).slice(2)
    console.log(data)
    try {
      console.log(data)
      const session = await dbServices.CreateUserDetails(data)
      console.log(session)
      if(session) {
        navigate('/discover')
      }
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className='w-full h-dvh flex justify-center items-center'>
      <div className=' w-1/3'>
        <h1 className='text-[#E94057] text-5xl text-center'>Profile Details</h1>
        <div className='flex my-20'>
          <label htmlFor="userPic" className='mx-auto rounded-full'>
            <input
              type="file"
              hidden
              id="userPic"
              onChange={(e) => setUserPic(URL.createObjectURL(e.target.files[0]))}
            />
            {
              userPic ? <img src={userPic} alt="" className='w-[500px] h-[500px] rounded-full mx-auto bg-cover bg-center' draggable={false} />
              : <img src="/imgs/user-pic.png" alt="" width={500} height={500} className='mx-auto'/>
            }
          </label>  
        </div>
      </div>
      <div className='w-8/12'>
      <form onSubmit={handleSubmit(userDetails)} className='grid grid-cols-3 gap-0'>
          {
            Fields.map(({ id, htmlFor, labelName, type, inputId, placeholder, hookFormfieldName }) => (
              <div key={id} className={`mt-2 ${selected === 'no' && inputId === 'children' ? 'hidden' : 'block'} ${(inputId === 'partnerSpecificationDetail' || inputId === 'currResidence') ? 'col-span-2 w-[90%]' : 'w-4/5'}`}>
                <label
                  htmlFor={htmlFor}
                  className="text-xl my-2"
                >
                  {labelName}
                </label>
                {
                  (inputId === 'currResidence' || inputId === 'partnerSpecificationDetail') ? 
                  (
                    <textarea
                      type='type'
                      id={inputId}
                      className="focus:outline-none text-lg w-full h-[48px] my-5 px-3 rounded-md border border-black overflow-hidden"
                      placeholder={`Enter your ${placeholder}`}
                      {
                        ...register(hookFormfieldName, {
                          required: true
                        }
                        )
                      }
                    />
                  )
                  : (inputId === 'marriedBefore') ? (
                    <select
                      value={selected}
                      onChange={(e) => {setSelected(e.target.value), console.log(e.target.value)}}
                      className='focus:outline-none text-lg w-full h-[48px] my-5 px-3 rounded-md border border-black'
                      {
                        ...register('marriedBefore', {
                          required: true
                        }
                        )
                      }
                    >
                      <option value='no' selected>No</option>
                      <option value='yes'>Yes</option>
                    </select>
                  ) : (
                    
                      <input
                        type='type'
                        id={inputId}
                        className='focus:outline-none text-lg w-full h-[48px] my-5 px-3 rounded-md border border-black'
                        placeholder={`Enter your ${placeholder}`}
                        {
                          ...register(hookFormfieldName, (inputId === 'children') ? {required: false} : {required: true})
                        }
                      />                      
                    
                  )
                }
              </div>
            ))
          }
          <div className={`py-8 mt-1 ${selected === 'no' ? 'col-span-3 w-[93%]' : 'col-span-2 w-[90%]'}`}>
            <button
              type="submit"
              className="w-full h-[48px] text-center bg-[#E94057] text-white rounded-md my-5"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
