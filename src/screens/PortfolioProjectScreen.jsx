import React from 'react'
import image from '../assets/files/portfolio.png'
import SkillCard from '../components/SkillCard'
import { FaReact, FaHtml5, FaGithub } from 'react-icons/fa6'
import {FaExternalLinkAlt} from 'react-icons/fa'
import {RiTailwindCssFill } from "react-icons/ri";

const PortfolioProjectScreen = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20 w-full text-4xl gap-8'>
      <div className="flex flex-col items-start justify-center gap-4  mx-4 md:max-w-180 md:w-full">
        <h1 className='font-semibold'>Portfolio Website Project</h1>
        <p className="text-2xl text-gray-500">A simple React site to host my details, CV and project links</p>
        <a className="outline outline-gray-400 rounded-xl overflow-clip cursor-pointer" href='https://lewis-miller.dev/' target='_blank'>
        <img src={image} alt=""/>
        </a>
      </div>

      <div className="flex flex-col items-start justify-center gap-4  mx-4 md:max-w-180 md:w-full">
        <h1 className='font-semibold text-2xl'>Technologies used</h1>
          <div className="flex flex-wrap items-center justify-center gap-4 w-full">
            <SkillCard icon={<FaHtml5/>} skill={'HTML'}/>
            <SkillCard icon={<RiTailwindCssFill/>} skill={'TailwindCSS'}/>
            <SkillCard icon={<FaReact/>} skill={'React'}/>
            <SkillCard icon={<FaGithub/>} skill={'Git/Github'}/>
          </div>
      </div>

      <div className="flex flex-col items-start justify-center gap-4  mx-4 md:max-w-180 md:w-full">
        <h1 className='font-semibold text-2xl'>Full Description</h1>
        <div className="text-lg flex flex-col gap-2">
          <p>This project is a way to both demonstrate my frontend skills in react as well as provide a platoform to host all of my portfolio information</p>

          <h1 className='font-semibold text-2xl'>How it was made</h1>
          <p>This project was built using Node and Vite to create a React app made up of a series of components. Each screen of the site is a React component which is itself made up of React components for each section</p>

          <p>The components themselves are structured using HTML through the JSX langauge and then styles with CSS through the TailwindCSS library. Each page layout is designed to be reactive and so will display correctly on any screen size</p>

          <p>The various pages are then linked together using the React Router package with a header for navigation.</p>

          <h3 className='font-semibold text-xl'>Deployment</h3>
          <p>Once completed the vite project is built into a static folder which is then hosted using GitHub pages and asigned to my website domain.</p>

          <h3 className='font-semibold text-xl'>Management</h3>
          <p>Through the project I used Git as a version control system to manage my files and allow me to safely make changes and add features. This then allowed me to place the project onto GitHub to be viewable. Additionally, this allowed the project to continuously deploy changes upon pushing to this repository.</p>

          <h1 className='font-semibold text-2xl'>Lessons Learned</h1>
          <p>This project allowed me to practice my frontend skills in building a clean and readable website for a specific purpose.</p>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center gap-4 px-4 md:px-0 md:max-w-180 w-full text-2xl">
        <h1 className='font-semibold text-2xl'>Website Links</h1>
        <a className="flex items-center gap-2 pl-4 hover:text-blue-600 transition duration-300" href="https://lewis-miller.dev/" target='_blank'>
          <p>lewis-miller.dev</p>
          <FaExternalLinkAlt className='text-xl' />
        </a>
        <a className="flex items-center gap-2 pl-4 hover:text-blue-600 transition duration-300" href="https://github.com/Lewis-27/portfolio" target='_blank'>
          <p >GitHub Repository</p>
          <FaExternalLinkAlt className='text-xl' />
        </a>
      </div>
      
    </div>
  )
}

export default PortfolioProjectScreen
