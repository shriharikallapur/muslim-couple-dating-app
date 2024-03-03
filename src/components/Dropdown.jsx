import React, { useState } from 'react'
import * as Slider from '@radix-ui/react-slider'
import * as Select from '@radix-ui/react-select'
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'

import { AgeSelector } from './AgeSelector'

export const Dropdown = () => {

  const [showDropDown, setShowDropDown] = useState(false)

  return (
    <div>
      <button
        className="bg-[#F7F8FC] p-3 rounded-full ms-5"
        onClick={() => setShowDropDown((curr) => curr === false ? true : false)}
      >
        <img src="./imgs/icons/filter-icon.png" alt="" />
      </button>
      
      <div className={`absolute w-[17rem] h-[20rem] bg-[#FFFFFF] top-[4.5rem] right-[2rem] rounded-md shadow-lg p-5 ${showDropDown ? 'block' : 'hidden'}`}>
        <div className='flex justify-between'>
          <button className='text-[#E94057]'>Clear</button>
          <p>Filters</p>
          <button>X</button>
        </div>
        <div className='my-10'>
          <div className='flex justify-between'>
            <p>Distance</p>
            <p>{10}</p>
          </div>
          <Slider.Root
            className="relative flex items-center select-none touch-none w-full h-5"
            defaultValue={[50]}
            max={100}
            step={1}
          >
            <Slider.Track className="bg-blackA7 relative grow rounded-full h-[3px] bg-[#E8E6EA]">
              <Slider.Range className="absolute bg-[#E94057] rounded-full h-full" />
            </Slider.Track>
            <Slider.Thumb
              className="block w-5 h-5 bg-[#E94057] shadow-[0_2px_10px] shadow-blackA4 rounded-[10px] hover:bg-violet3 outline-none"
              aria-label="Volume"
            />
          </Slider.Root>
        </div>
        <div className='my-10'>
          <div className='flex justify-between items-center'>
            <p>Age Group</p>
            <AgeSelector />
          </div>
        </div>
      </div>
    </div>
  )
}
