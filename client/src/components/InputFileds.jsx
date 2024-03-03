import React from 'react'

export const InputFileds = ({ htmlFor, labelName, type, inputId, placeholder, hookFormfieldName, fieldIcon }) => {
  return (
    <div className="w-4/5 mt-5">
      <label
        htmlFor={htmlFor}
        className="text-xl my-2"
      >
        {labelName}
      </label>
      <div className="my-5 flex w-full h-[48px] px-3 rounded-md border border-black">
        <input
          type={type}
          id={inputId}
          className="focus:outline-none text-xl w-[90%]"
          placeholder={`Enter your ${placeholder}`}
          {
            ...register({hookFormfieldName}, {
              required: true
            })
          }
        />
        <img src={fieldIcon} className="m-auto" alt="" />
      </div>
    </div>
  )
}
