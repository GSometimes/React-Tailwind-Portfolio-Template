import React, { useState } from 'react'
import { navData } from '../data/NavData'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <header className='font-mono py-4 fixed w-full top-0 z-50 bg-zinc-900 text-slate-200'>
      <div className='container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full'>
        <div className='text-2xl text-teal-600 z-50'>GS</div>
        <ul className='hidden md:flex space-x-6 items-center divide-teal-600'>
          {navData.map((item, index) => (
            <li
              className='hover:decoration-teal-600 hover:underline hover:underline-offset-4 decoration-2 cursor-pointer'
              key={index}>
              <Link to={item.name} smooth={true} offset={-125} duration={700}>
                {item.title}
              </Link>
            </li>
          ))}
          <li>
            <button className='px-6 py-2 bg-teal-600 hover:bg-teal-700 font-bold font-mono rounded'>
              <Link to='contact' smooth={true} duration={700}>
                Contact
              </Link>
            </button>
          </li>
        </ul>
        <div className='flex items-center space-x-4 md:hidden'>
          <ul className='z-50'>
            <li>
              <button className='text-sm px-6 py-2 bg-teal-600 hover:bg-teal-700 font-bold font-mono rounded'>
                Contact
              </button>
            </li>
          </ul>
          <div onClick={handleClick} className='z-10'>
            {!open ? (
              <svg
                className='w-6 h-6 z-10'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'></path>
              </svg>
            ) : (
              <svg
                className='w-6 h-6 z-10'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'></path>
              </svg>
            )}
          </div>
          <ul
            hidden
            className={
              !open
                ? 'hidden'
                : 'absolute top-0 left-0 w-full h-screen bg-zinc-900 flex flex-col justify-center items-center'
            }>
            {navData.map((item, index) => (
              <li
                className=' py-6 text-4xl hover:decoration-teal-600 hover:underline hover:underline-offset-4 decoration-2'
                key={index}>
                <Link
                  to={item.name}
                  smooth={true}
                  offset={-125}
                  duration={700}
                  onClick={handleClick}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar
