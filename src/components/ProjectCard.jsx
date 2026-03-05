import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({title, description, image, link}) => {
  return (
    <Link to={link}>
    <div className='w-110 md:w-140 h-130 outline outline-gray-300 rounded-xl shadow-lg flex flex-col items-center justify-center gap-4 py-10 px-4 transition duration-300 hover:bg-black hover:text-white'>
      <h1 className=''>{title}</h1>
      <p className='text-xl text-center'>{description}</p>
      <div className="grow flex items-center justify-center">
        <div className="mx-2 flex items-center justify-center border border-gray-300 rounded-xl overflow-clip">

          <img src={image} alt="" className='h-[250px] object-cover '/>
        </div>
      </div>
      
      {/* <Link to={link} className="bg-black text-white rounded-lg shadow-lg px-2 py-1 text-xl cursor-pointer hover:bg-white hover:text-black hover:shadow-none hover:outline hover:outline-gray-300 transition duration-300">See more</Link> */}
    </div>
    </Link>
  )
}

export default ProjectCard
