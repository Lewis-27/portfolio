import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { FaBars, FaChevronLeft } from 'react-icons/fa6'

const Header = ({showHeader, setShowHeader}) => {
  

  return (
    <div className='z-50'>
      <div className='hidden sticky top-0 w-full h-16 md:flex items-center justify-center gap-32 bg-white text-lg'>
        <NavLink className={({isActive}) => isActive ? 'font-bold' : 'font-light'} to={'/'}>Home</NavLink>
        <NavLink className={({isActive}) => isActive ? 'font-bold' : 'font-light'} to={'/about-me'}>About Me</NavLink>
        <NavLink className={({isActive}) => isActive ? 'font-bold' : 'font-light'} to={'/projects'}>Projects</NavLink>
        <NavLink className={({isActive}) => isActive ? 'font-bold' : 'font-light'} to={'/contact'}>Contact</NavLink>
      </div>

      <div className="flex absolute md:hidden ">
        <FaBars className='text-3xl relative top-2 left-2 cursor-pointer z-50' onClick={() => {setShowHeader(!showHeader)}}/>
        <div className={`flex flex-col h-screen w-32 items-start z-50  ${showHeader ? '-translate-x-40' : '-translate-x-8'} bg-white shadow-lg transition`}>
          <FaChevronLeft className='cursor-pointer h-8 mx-4 mt-2' onClick={() => {setShowHeader(!showHeader)}}/>
          <div className="flex flex-col grow items-center justify-evenly w-full ">
            <NavLink className={({isActive}) => isActive ? 'font-bold' : 'font-light'} to={'/'} onClick={() => {setShowHeader(false)}}>Home</NavLink>
            <NavLink className={({isActive}) => isActive ? 'font-bold' : 'font-light'} to={'/about-me'} onClick={() => {setShowHeader(false)}}>About Me</NavLink>
            <NavLink className={({isActive}) => isActive ? 'font-bold' : 'font-light'} to={'/projects'} onClick={() => {setShowHeader(false)}}>Projects</NavLink>
            <NavLink className={({isActive}) => isActive ? 'font-bold' : 'font-light'} to={'/contact'} onClick={() => {setShowHeader(false)}}>Contact</NavLink>            
          </div>

        </div>
      </div>
    </div>
      
    
  )
}

export default Header
