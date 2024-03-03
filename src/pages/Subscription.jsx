import React from 'react'
import { Link } from 'react-router-dom'

const Pricing = [
  {
    id: '1',
    title: 'Monthly',
    price: '$40',
    limit: '30',
    hours: '12'
  },
  {
    id: '2',
    title: 'Annually',
    price: '$450',
    limit: '356',
    hours: '24'
  }
]

export const Subscription = () => {
  return (
    <div className="alm arx cfj">
      <div className="max-w-[60rem] mx-auto px-8">
        <div className=" max-w-4xl text-center mx-auto">
          <h2 className='text-[1rem] font-semibold leading-7 text-[#E94057]'>
            Subscription
          </h2>
          <p className="text-[3rem] tracking-tight leading-none font-bold mt-2">
            Pricing plans for teams of&nbsp;all&nbsp;sizes
          </p>
        </div>
        <p className="leading-8 text-lg text-center max-w-2xl mt-6 mx-auto">
          Choose an affordable plan that's packed with the best features for engaging your audience, creating customer loyalty, and driving sales.
        </p>
        <div className="mt-16 gap-8 grid isolate grid-cols-2 max-w-[1200px]">
          {
            Pricing.map(({id, title, price, limit, hours}) => (
              <div key={id} className="p-10 ring ring-[#e5e7eb] rounded-3xl">
                <div className='gap-4 flex justify-center items-center'>
                  <h3 id="tier-freelancer" className='leading-8 font-semibold text-lg text-center'>
                    {title}
                  </h3>
                </div>
                <p className='leading-6 text-sm mt-4 text-center'>
                  The essentials to provide your best work for clients.
                </p>
                <p className="lk lx za zx my-5 text-center">
                  <span className="avs awc aww axu text-2xl font-bold">
                    {price}
                  </span>
                </p>
    
                <div className='w-full flex justify-center'>
                  <Link
                    to='/payments'
                    className='bg-[#E94057] text-white py-2 px-20 rounded'
                  >
                    Buy plan
                  </Link>              
                </div>
    
                <div className='flex justify-center'>
                  <ul role="list" className="lm abv avz awo axr dio mt-10">
                    <li className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[1.5rem]">
                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
                      </svg>
                      <p className='mx-5'>Unlimited Swipes</p>
                    </li>
                    <li className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[1.5rem]">
                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
                      </svg>
                      <p className='mx-5'>limit {limit} days</p>
                    </li>
                    <li className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[1.5rem]">
                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
                      </svg>
                      <p className='mx-5'>{hours}-hour support</p>
                    </li>
                  </ul>              
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
