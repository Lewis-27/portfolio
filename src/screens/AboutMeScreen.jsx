import React from 'react'
import SkillCard from '../components/SkillCard'
import { FaReact, FaHtml5, FaCss3, FaNode, FaGithub, FaPython } from 'react-icons/fa6'
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiMongoose, SiExpress, SiRedux } from "react-icons/si";
import { BsFiletypePdf } from "react-icons/bs";
import { Link } from 'react-router-dom';
import CV from '../assets/files/LewisMillerCV.pdf'

const AboutMeScreen = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20 w-full text-4xl gap-16'>
      <div className="flex flex-col items-start justify-center gap-2  mx-4 md:max-w-180 md:w-full">
        <h1 className='font-semibold'>About me</h1>
        <p className='text-2xl'>I am a fullstack developer currently seeking employment. I work using the MERN stack and this site serves as my portfolio.</p>
        <p className="text-2xl">Below you can find out more information about me as such as my skills and education.</p>
      </div>

      <div className="flex flex-col items-start justify-center gap-2  mx-4 md:max-w-160 md:w-full">
        <h1 className='font-semibold'>Skills</h1>
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
          <SkillCard icon={<RiJavascriptFill/>} skill={'JavaScript'}/>
          <SkillCard icon={<FaHtml5/>} skill={'HTML'}/>
          <SkillCard icon={<FaCss3/>} skill={'CSS'}/>
          <SkillCard icon={<RiTailwindCssFill/>} skill={'TailwindCSS'}/>
          <SkillCard icon={<FaReact/>} skill={'React'}/>
          <SkillCard icon={<SiMongodb/>} skill={'MongoDB'}/>
          <SkillCard icon={<SiMongoose/>} skill={'Mongoose'}/>
          <SkillCard icon={<SiExpress/>} skill={'Express'}/>
          <SkillCard icon={<FaNode/>} skill={'NodeJS'}/>
          <SkillCard icon={<SiRedux/>} skill={'Redux/RTK'}/>
          <SkillCard icon={<FaGithub/>} skill={'Git/Github'}/>
          <SkillCard icon={<FaPython/>} skill={'Python'}/>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center gap-2  mx-4 md:max-w-180 md:w-full">
        <h1 className='font-semibold'>Education</h1>
        <div className="flex flex-col gap-1 text-xl w-full">
          <div className="flex gap-1 justify-between items-center">
            <p className="font-semibold">Aston University, Birmingham</p>
            <p className="font-light text-gray-500">(September 2018 - May 2021)</p>
          </div>
          <p className="text-lg text-gray-700 pl-4">BEng (Hons) Electronic Engineering and Computer Science (1st) with award for best final year project</p>
        </div>
        <div className="flex flex-col gap-1 text-xl w-full">
          <div className="flex gap-1 justify-between items-center">
            <p className="font-semibold">Tudor Grange Academy, Solihull (Sixth Form)</p>
            <p className="font-light text-gray-500">(September 2016 - June 2018)</p>
          </div>
          <p className="text-lg text-gray-700 pl-4">A-levels: History (A), Maths (B), Physics (B)</p>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center gap-2  mx-4 md:max-w-180 md:w-full">
        <h1 className='font-semibold'>Experience</h1>
        <div className="flex flex-col gap-1 text-xl w-full">
          <div className="flex gap-1 justify-between items-center">
            <div className="flex gap-2 items-center ">
              <p className="font-semibold">Sales Assistant</p>
              <p className="">-</p>
              <p className="text-lg text-gray-700 font-light">HMV Solihull</p>
            </div>
            <p className="font-light text-gray-500">(July 2021 - Present)</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center gap-2  mx-4 md:max-w-180 md:w-full">
        <h1 className='font-semibold'>CV</h1>
        <a 
          className="w-100 rounded-xl outline outline-gray-200 shadow-lg h-20 flex items-center px-8 gap-4 cursor-pointer hover:bg-black hover:text-white transition duration-300" 
          href={CV} 
          target='_blank'
          rel='noopener noreferrer'
          type='pdf'>
          <BsFiletypePdf />
          <p className="text-3xl">Lewis Miller CV</p>
        </a>
      </div>
      
    </div>
  )
}

export default AboutMeScreen
