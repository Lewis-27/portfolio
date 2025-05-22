import React from 'react'

const SkillCard = ({icon, skill}) => {
  return (
    <div className='aspect-square w-28 outline outline-gray-200 shadow-lg rounded-lg p-2 flex flex-col items-center justify-center text-xl hover:bg-black hover:text-white transition duration-200'>
      <div className="text-4xl">{icon}</div>
      <div className={skill === 'TailwindCSS' ? 'text-lg' : ''}>{skill}</div>
    </div>
  )
}

export default SkillCard
