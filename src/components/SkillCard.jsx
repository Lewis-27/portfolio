import React from 'react'
import { useEffect, useState } from 'react'

const SkillCard = ({icon, skill}) => {
  const [styling, setStyling] = useState('')
  
  useEffect(() => {
    const getSizing = () => {
      if(skill === 'TailwindCSS'){
        setStyling('text-lg')
      } else if (skill === 'TanstackQuery'){
        setStyling('text-sm')
      }else {
        setStyling('')
      }
    }
    getSizing()
  }, [])

  return (
    <div className='aspect-square w-28 outline outline-gray-200 shadow-lg rounded-lg p-2 flex flex-col items-center justify-center text-xl hover:bg-black hover:text-white transition duration-200'>
      <div className="text-4xl">{icon}</div>
      <div className={styling}>{skill}</div>
    </div>
  )
}

export default SkillCard
