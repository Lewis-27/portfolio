import React from 'react'
import image from '../assets/files/blog.png'
import SkillCard from '../components/SkillCard'
import { FaReact, FaHtml5, FaNode, FaGithub } from 'react-icons/fa6'
import {FaExternalLinkAlt} from 'react-icons/fa'
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiMongoose, SiExpress, SiRedux } from "react-icons/si";
import { BsFiletypePdf } from "react-icons/bs";

const BlogProjectScreen = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20 w-full text-4xl gap-8 mx-4'>
      <div className="flex flex-col items-start justify-center gap-4  mx-4 md:max-w-180 w-full">
        <h1 className='font-semibold'>Mock Blog Website Project</h1>
        <p className="text-2xl text-gray-500">A Fullstack MERN blogging site with full CRUD functionality, custom API and React frontend</p>
        <a className="outline outline-gray-400 rounded-xl overflow-clip cursor-pointer" href='https://blog.lewis-miller.dev' target='_blank'>
        <img src={image} alt=""/>
        </a>
      </div>

      <div className="flex flex-col items-start justify-center gap-4  mx-4 md:max-w-180 w-full">
        <h1 className='font-semibold text-2xl'>Technologies used</h1>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <SkillCard icon={<RiJavascriptFill/>} skill={'JavaScript'}/>
            <SkillCard icon={<FaHtml5/>} skill={'HTML'}/>
            <SkillCard icon={<RiTailwindCssFill/>} skill={'TailwindCSS'}/>
            <SkillCard icon={<FaReact/>} skill={'React'}/>
            <SkillCard icon={<SiMongodb/>} skill={'MongoDB'}/>
            <SkillCard icon={<SiMongoose/>} skill={'Mongoose'}/>
            <SkillCard icon={<SiExpress/>} skill={'Express'}/>
            <SkillCard icon={<FaNode/>} skill={'NodeJS'}/>
            <SkillCard icon={<SiRedux/>} skill={'Redux/RTK'}/>
            <SkillCard icon={<FaGithub/>} skill={'Git/Github'}/>
          </div>
      </div>

      <div className="flex flex-col items-start justify-center gap-4  mx-4 md:max-w-180 w-full">
        <h1 className='font-semibold text-2xl'>Full Description</h1>
        <div className="text-lg flex flex-col gap-2">
          <p>This project is an exercise in using the different technologies in the MERN stack. I created it as a way to both practice and demonstrate my fullstack skills.</p>

          <h1 className='font-semibold text-2xl'>How it was made</h1>
          <p>This project was built using the MERN tech stack of MongoDB, Express, React and Node.js and is separated into a frontend and backend.</p>

          <h3 className='font-semibold text-xl'>Backend</h3>
          <p>The first part of the site to be built was the backend. This is responsible for managing two sets of data resources: users and posts. The data for each resource is contained in a MongoDB database with a separate collection for users and for posts with each individual user and post being a document within their respective collection. The database itself was hosted using MongoDB's cloud hosting Atlas.</p>

          <p>It was then necessary to create an API that interacts with the database to perform CRUD operations on the data. I used express to create a server that listens for HTTP requests on various routes that are defined by the express router. These routes included the HTTP methods GET, POST, PUT and DELETE which through controller functions written in JavaScript are translated into actions relevant to the data such as logging the user in and out and fetching and posting posts. I used the JavaScript library Mongoose within this controller functions to manipulate the data held within the MongoDB collections as well as to define a schema for the format each document within the collection should take. The user's passwords are encrypted using the bcryptjs library before being stored in the database in order to protect the user's security. In order to give users the ability to log in it is necessary to store their credentials at log in and this was done using jwt authentication where the user's data is stored as a JSON web token in the browser when they successfully enter the correct credentials. This allows the user access to private routes such as editing their details and making posts. As an extra layer of robustness I also included an error handling middleware function that detects unrecognised routes in the API to prevent the API from crashing and misuse</p>

          <p>I used the program Postman to simulate HTTP requests to test the functionality of the API for both the users and posts. Once I knew all of the routes worked as expected it was time to move onto the frontend</p>

          <h3 className='font-semibold text-xl'>Frontend</h3>
          <p>The majority of the frontend of this project was built using the framework React via Vite so was programmed in jsx the cross between JavaScript and HTML. In order to style the website I used the library TailwindCSS to style the CSS with shorthand notation within the HTML elements themselves.</p>

          <p>The structure of the site is made up of a series of screens or pages which are themselves made of individual react functional components. I used React Router to handle the routing of each page with Link components to navigate between the various screens. I styled the website in a modern minimalist style for a clean appearance which is easy to navigate. The user has a customisable profile with a chosen colour which reflects in their profile icon and banner. There are screens for logging in and out as well as viewing posts either by specific user or all at once. The browsing of posts also includes pagination and sorting of posts by date to display the posts in a more readable manner. Each page and component layout is designed to be reactive to the width of the browser used to view them, this means the site maintains its layout and readability on all devices including mobile and tablet.</p>

          <p>In order to handle the interfacing of the frontend and backend of the application I used the libraries Redux and Redux toolkit. This allowed me to use Redux slices to create React hooks that send to and fetch from the backend API which simplifies the amount of code in each react component. The data for each component is fetched using React's useEffect hook which uses the custom build Redux hooks to perform the HTTP requests and then store that resultant data in React states to be displayed and manipulated within the user interface. I also used Redux's store functionality to store the currently logged in user's data as a global state which allowed me to perform conditional formatting based on whether the user is logged in such as changing what is displayed on the header and preventing users from accessing pages such as the login page while already logged in or viewing the my profile screen while logged out.</p>

          <h3 className='font-semibold text-xl'>Deployment</h3>
          <p>Once both the frontend and backend were completed and working as intended it was then possible to deploy the site online. During development the site worked by running two terminal windows with the backend running on localhost port 5000 while the frontend runs on localhost port 3000. I used Vite's build tool to build the frontend into a static folder, the backend router then directs all HTTP requests that aren't for the API to the static folder which displays the frontend. I then used Render as a host to run the backend server (which also points to the frontend). I assigned the render server to a subdomain of my website: blog.lewis-miller.dev.</p>

          <h3 className='font-semibold text-xl'>Management</h3>
          <p>Through the project I used Git as a version control system to manage my files and allow me to safely make changes and add features. This then allowed me to place the project onto GitHub to be viewable. Additionally, this allowed the render server to be configured to rebuild the project upon push to this repository allowing me to make changes, updates and bugfixes on the site while it is still deployed</p>

          <h1 className='font-semibold text-2xl'>Lessons Learned</h1>
          <p>Completing this project taught me a huge amount about the MERN stack. Developing a project from start to finish and seeing the way each part of the tech stack integrates with and feeds into one another to form a cohesive final product was both challenging and incredibly fulfilling. I had studied and learned each part of the tech stack individually and had a good working knowledge of the syntax of each but the opportunity to combine all the parts together was an excellent opportunity to deepen the depth of my knowledge of each technology and presented me with plenty of challenges to overcome. These challenges gave me a fantastic opportunity to use and develop my problem solving skills to solve both low level syntax based problems and higher level project wide problems which helped develop my skills as a fullstack developer.</p>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center gap-4  mx-4 md:max-w-180 w-full text-2xl">
        <h1 className='font-semibold text-2xl'>Website Links</h1>
        <a className="flex items-center gap-2 pl-4 hover:text-blue-600 transition duration-300" href="https://blog.lewis-miller.dev/" target='_blank'>
          <p>blog.lewis-miller.dev</p>
          <FaExternalLinkAlt className='text-xl' />
        </a>
        <a className="flex items-center gap-2 pl-4 hover:text-blue-600 transition duration-300" href="https://github.com/Lewis-27/blog" target='_blank'>
          <p >GitHub Repository</p>
          <FaExternalLinkAlt className='text-xl' />
        </a>
      </div>
      
    </div>
  )
}

export default BlogProjectScreen
