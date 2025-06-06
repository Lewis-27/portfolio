import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({title, description, image, link}) => {
  return (
    <div className='w-100 md:max-w-100 lg:w-120 h-130 outline outline-gray-300 rounded-xl shadow-lg flex flex-col items-center justify-center gap-4 py-10 px-4'>
      <h1 className=''>{title}</h1>
      <p className='text-xl text-center'>{description}</p>
      <div className="grow flex items-center justify-center">
        <div className="mx-2 flex items-center justify-center border border-gray-300 rounded-xl overflow-clip">

          <img src={image} alt="" className=''/>
        </div>
      </div>
      
      <Link to={link} className="bg-black text-white rounded-lg shadow-lg px-2 py-1 text-xl cursor-pointer hover:bg-white hover:text-black hover:shadow-none hover:outline hover:outline-gray-300 transition duration-300">See more</Link>
    </div>
  )
}

export default ProjectCard
