import React from 'react'
import ProjectCard from '../components/ProjectCard'
import portfolioImage from '../assets/files/portfolio.png'
import blogImage from '../assets/files/blog.png'

const ProjectsScreen = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20 w-full text-4xl gap-4'>
      <div className="flex flex-col items-start justify-center gap-2  mx-4 md:max-w-180 md:w-full">
        <h1 className='font-semibold'>Projects</h1>
        <p className='text-2xl'>Below are some of the projects I have completed using the MERN stack.</p>
        <p className="text-2xl">Clicking on each project will give you more details</p>
      </div>

      <div className="w-full m-16 flex flex-col md:flex-row gap-8 items-center justify-center px-4">
        <ProjectCard 
          title={'Portfolio Website'}
          description={'A simple React site to host my details, CV and project links '}
          image={portfolioImage}
          link={'/projects/portfolio'}
        />
        <ProjectCard 
          title={'Mock Blog Website'}
          description={'A Fullstack MERN blogging site with full CRUD functionality, custom API and React frontend'}
          image={blogImage}
          link={'/projects/blog'}
        />
      </div>
    </div>
  )
}

export default ProjectsScreen
