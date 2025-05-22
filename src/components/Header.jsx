import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='sticky top-0 w-full h-16 flex items-center justify-center gap-32 bg-white text-lg'>
      <NavLink className={({isActive}) => isActive ? 'font-bold' : 'font-light'} to={'/'}>Home</NavLink>
      <NavLink className={({isActive}) => isActive ? 'font-bold' : 'font-light'} to={'/about-me'}>About Me</NavLink>
      <NavLink className={({isActive}) => isActive ? 'font-bold' : 'font-light'} to={'/projects'}>Project</NavLink>
      <NavLink className={({isActive}) => isActive ? 'font-bold' : 'font-light'} to={'/contact'}>Contact</NavLink>
    </div>
  )
}

export default Header
