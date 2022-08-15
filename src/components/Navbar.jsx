import React from 'react'
import { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

function Navbar() {
  const [toggle, setToggle] = useState(false)
  const [active, setActive] = useState('Home')
  return (
    <nav className='w-full flex py-6 justify-between items-center'>
      <img className='w-[124px] h-[32px]' src={logo} alt="HooBank" />

      <ul className='list-none hidden sm:flex justify-end items-center flex-1'>
        {
          navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} ${active === nav.title ? 'text-white' : 'text-dimWhite'}`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))
        }
      </ul>

      { /* Mobile response */ }
      <div className='flex flex-1 justify-end items-center sm:hidden'>
        { /* Menu and Closing bar */ }
        <img 
          className='w-[25px] h-[25px]' 
          src={toggle ? close : menu} alt="menu"
          onClick={() => (setToggle(prevToggle => !prevToggle))} />
        
        { /* List items */}
        <div className={`${!toggle ? 'hidden' : 'flex'} p-8 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[200px] rounded-md sidebar`}>
          <ul className='list-none items-start justify-end flex flex-col flex-1 sm:hidden'>
            {
              navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-meduim cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-10'} ${active === nav.title ? 'text-white' : 'text-dimWhite'}`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#{nav.id}`}>{nav.title}</a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  )
  
}

export default Navbar