import React from 'react'
import { Logout } from '../auth/Logout'
import {NavLink} from 'react-router-dom'
import * as Tooltip from '@radix-ui/react-tooltip'

const menuList = [
  {
    id: '1',
    to: '/discover',
    name: 'Discover',
    iconsActive: './imgs/icons/discover-icon-active.png',
    icons: './imgs/icons/discover-icon.png',
  },
  {
    id: '2',
    to: '/favorite',
    name: 'Favorite',
    iconsActive: './imgs/icons/favorite-icon-active.png',
    icons: './imgs/icons/favorite-icon.png',
  },
  {
    id: '3',
    to: '/chats',
    name: 'Chats',
    iconsActive: './imgs/icons/chats-icon-active.png',
    icons: './imgs/icons/chats-icon.png',
  }, 
  {
    id: '4',
    to: '/subscription',
    name: 'Subscription',
    iconsActive: './imgs/icons/subscription-icon-active.png',
    icons: './imgs/icons/subscription-icon.png',
  },
  {
    id: '5',
    to: '/profile',
    name: 'Profile',
    iconsActive: './imgs/icons/profile-icon-active.png',
    icons: './imgs/icons/profile-icon.png',
  }
]

export const Sidebar = () => {
  return (
    <header id='sidebar' className='w-40 h-dvh'>
      <div className='flex w-full h-[10dvh]'>
        <img src="./imgs/logo.png" alt="" className='w-[100px] h-[100px] mx-auto my-5'/>
      </div>
      <div className='w-full h-[80dvh] flex'>
        <ul className='w-full h-auto my-auto border-r-4 border-r-[#E94057]'>
          {
            menuList.map(({id, to, name, iconsActive, icons}) => (
              <li key={id} className='my-10 flex'>
                <Tooltip.Provider>
                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <NavLink
                        to={to}
                        className='mx-auto'
                      >
                        {
                          ({isActive}) => (isActive) ?
                            <img src={iconsActive} alt="" /> :
                            <img src={icons} alt="" />
                        }
                      </NavLink>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content className="TooltipContent bg-[#000000] py-1 px-5 text-white rounded" side="right" sideOffset={5}>
                        {name}
                        <Tooltip.Arrow className="TooltipArrow" />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                </Tooltip.Provider>
              </li>
            ))
          }
        </ul>
      </div>
      <div className='flex justify-center w-full h-[10dvh]'>
        <Logout />
      </div>
    </header>
  )
}
