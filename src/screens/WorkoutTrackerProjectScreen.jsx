import React from 'react'
import image from '../assets/files/WorkoutsScreen.png'
import SkillCard from '../components/SkillCard'
import { FaReact, FaHtml5, FaNode, FaGithub } from 'react-icons/fa6'
import {FaExternalLinkAlt} from 'react-icons/fa'
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiMongoose, SiExpress, SiRedux, SiReactquery, SiAxios } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import CodeBlock from '../components/CodeBlock'

const BlogProjectScreen = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20 w-full text-4xl gap-8 mx-4'>
      <div className="flex flex-col items-start justify-center gap-4  mx-4 md:max-w-180 w-full">
        <h1 className='font-semibold'>Workout Tracker Project</h1>
        <p className="text-2xl text-gray-500">A Fullstack web app for tracking workout routines. Built in React using an Express backend with a postgreSQL database</p>
        <a className="outline outline-gray-400 rounded-xl overflow-clip cursor-pointer" href='https://workouts.lewis-miller.dev' target='_blank'>
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
            <SkillCard icon={<TbSql />} skill={'PostgreSQL'}/>
            <SkillCard icon={<SiExpress/>} skill={'Express'}/>
            <SkillCard icon={<FaNode/>} skill={'NodeJS'}/>
            <SkillCard icon={<SiReactquery />} skill={'TanstackQuery'}/>
            <SkillCard icon={<SiAxios />} skill={'Axios'}/>
            <SkillCard icon={<FaGithub/>} skill={'Git/Github'}/>
          </div>
      </div>

      <div className="flex flex-col items-start justify-center gap-4  mx-4 md:max-w-180 w-full">
        <h1 className='font-semibold text-2xl'>Full Description</h1>
        <div className="text-lg flex flex-col gap-2">
          <p>Workout tracker is a simple web app that allows users to create workouts to represent a day at the gym. Users create individual workout templates such as 'Arm Day' or 'Push Day'. 
Inside these workouts they can list exercises they will complete as part of the workout such as 'Curl' or 'Bench Press'. They can then add sets to the workout such as 12 repetitions at 10 kg.</p>

          <h1 className='font-semibold text-2xl'>How it was made</h1>
          <p><b>Tech Used:</b> Node, Express, postgreSQL, JWT, BCryptJS, HTML, CSS, React, Zustand, ShadCN, Tailwind, Tanstack Query</p>

          <h3 className='font-semibold text-xl'>Backend</h3>
          <p>The backend of the project consists of an Express server running on Node JS, it uses custom endpoints such as <CodeBlock text='/api/user/profile'/> or <CodeBlock text='/api/workouts' /> to manipulate a postgreSQL relational database.</p>

          <h4 className='text-lg font-semibold'>Database</h4>
          <p>The database consists of a series of tables, one for each distrinct piece of data: users, workouts, exercises and sets.</p>
          <p>Each of these tables maintains a many-to-one relationship with the next table along (Users -&#62; Workouts -&#62; Exercises -&#62; Sets) using foreign keys to refer to the table to which it belongs. For example, each user can have many workouts but each workout belongs only to one user.</p>
          <p>Using SQL queries it is possible to select the data from the database such as all of the sets that belong to a specific exercises:</p>
          <CodeBlock 
          text='SELECT sets.id, exercise_id, exercise_name, weight, reps, sets.time_created 
FROM sets 
INNER JOIN exercises ON sets.exercise_id = exercises.id WHERE exercise_id=$1 
ORDER BY sets.time_created ASC' />
          <p>Once the database was working correctly locally I then migrated it to the cloud host Neon where the database could be accessed using a connection string.</p>

          <h4 className='text-lg font-semibold'>Express Server</h4>
          <p>The express server serves to connect HTTP requests (such as <CodeBlock text='GET /api/workouts/1'/> or <CodeBlock text='POST /api/exercises/workout/4'/> ) to SQL queries that perform CRUD (Create, Read, Update, Delete) actions on the database.</p>
          <p>Each request contains route parameters such as the id of the targeted resource in the case of GET, PUT and DELETE requests and/or JSON data in the case of POST and PUT requests.</p>

          <h4 className='text-lg font-semibold'>Controller Functions</h4>
          <p>The express router passes each request on to the relevant controller function based on the endpoint and type of request made. For example <CodeBlock text='GET /api/workouts/1'/> would be passed on the controller function <CodeBlock text='getWorkoutById'/></p>
          <p>These controller functions will pull the relevant data from the route parameter and request body and format it into an SQL query. This query is then carried out on the database and the results to passed back to the controller function which formats the data into a HTTP response</p>

          <h4 className='text-lg font-semibold'>Handling Users</h4>
          <p>The first step for a user to interact with the app is to create an account. This is handled in the backend with a series of api calls.</p>
          <p>First a request is made to <CodeBlock text='POST /api/users' /> containing the user's name, email and password.</p>
          <p>The controller function formats this data into an SQL query to insert new data into the users table. As part of this it is necessary for security to hash the users password so it is not stored in the database as plaintext.</p>
          <p>Hashing the password was done using the library <CodeBlock text='bcryptjs' /> via a function to take in the password and output a hash.</p>
          <p>Once the SQL query is successfully carried out the returned information which includes the user's id is returned to the user as part of the response.</p>
          <p>In addition a JWT (JSON Web Token) cookie is generated containing the user's id. The existence of the JWT cookie is what verifies that the users is currently logged in.</p>
          <p>A similar process is carried out for logging a user in, the user submits a POST request containing their email and password.</p>
          <p>The controller function searches for a user with the email supplied, then using the compare function from bcryptjs, the entered password is compared to the password in the database.</p>
          <p>If either an account is not found for the email, or the password doesn't match, an error is thrown stating that the entered credentials are incorrect, otherwise a JWT cookie is created using the user's id.</p>
          <p>For logging the user out, the controller function removes any currently stored JWT cookies.</p>
          <p>Aside from the register a new user and logging in a user endpoint, all other endpoints require the existence of a valid JWT cookie.</p>
          <p>Using a piece of middleware, the JWT cookie is decoded and the userId stored inside is requested from the database.</p>
          <p>If the token exists and corresponds to a user in the database, the details of the user (id, name, email) are stored in the express request object and passed on to the specified controller function.</p>
          <p>If not, access to the controller function is denied as the user does not have a valid token.</p>
          <p>The SQL queries that interact with any pieces of data that belong to user are checked against the stored userId rather than a specified userId, ensuring that users can only interact with data belonging to them.</p>

          <h4 className='text-lg font-semibold'>Handling Workouts, Exercise and Sets</h4>
          <p>Once the user is logged in they can then access the endpoints related to workouts, exercises and sets. The user can perform CRUD actions by submitting HTTP requests to the correct endpoint.</p>
          <p>Each entry in the workouts table requires two pieces of information: a workout name, and the user it belongs to. This owner field is a foreign key referring to the userId of the user submitting the request.</p>
          <p>First the user sends a HTTP POST request to <CodeBlock text='/api/workouts'/>  specifiying a name for the workout such as 'Arms' or 'Leg Day' in the request body.</p>
          <p>The controller function will then retrieve the userId from the user object stored in the request object by the authentication middleware.</p>
          <p>An SQL query is then created to insert this data into the table for workouts containing both the workout name and owner id.</p>
          <p>The user can then perform the Read, Update and Delete actions via HTTP requests to the relevant endpoints.</p>
          <p>A similar pattern is followed for the remaining tables in the database regarding foreign keys and the data they hold.</p>
          <p>Creating an exercise requires specifying the name of the exercise, the muscle group the exercise works (biceps, legs, back, etc) and the id of workout that it belongs to (foreign key).</p>
          <p>Creating a set requires specifying the weight, number of reps performed and the id of the exercise it belongs to (foreign key).</p>
          <p>Each of these tables also have a field for time created, this is used later in the frontend for displaying the most recent data first.</p>

          <h4 className='text-lg font-semibold'>Backend Error Handling</h4>
          <p>It is necessary to carry out error handling for each of the SQL queries as disconnection from the server or invalid requests can throw errors which must be handled accordingly.</p>
          <p>In this case I used <CodeBlock text='try catch'/> statements to catch errors. The response status is then updated to reflect the error state and an error is thrown with an intelligible message such as <CodeBlock text='Could not find workout' /> or <CodeBlock text='Invalid credentials'/> </p>
          

          <h3 className='font-semibold text-xl'>Frontend</h3>
          <p>For the frontend of the project I used React. The contents of the page are structured and styled using <CodeBlock text='shadcn' /> and <CodeBlock text='tailwindcss' /> . For routing between pages I used the package <CodeBlock text='react-router-dom' /> . I used a combination of <CodeBlock text='axios' />  and <CodeBlock text='tanstack-query' /> to fetch data from the backend API and I used the state manager <CodeBlock text='zustand' /> to store the user details in a global state store.</p>

          <h4 className='text-lg font-semibold'>Structure</h4>
          <p>Each endpoint for the site such as <CodeBlock text='/' />, <CodeBlock text='/login' /> and <CodeBlock text='/workout/1' /> uses the react router to render a React component which acts as the desired page such as the home page, login/logout page, signup page and individual pages for each workout.</p>
          <p>The contents of each page is then made up of further React components such as the header, forms for signing up and logging in and cards representing workouts, exercises and sets.</p>
          <p>These components (such as buttons, cards, inputs and spinners) are themselves made from components from the ShadCN component library styled using tailwind classes. This helps to give the website a consistent style while also maintaining structure and efficiency as code can be reused throughout the project.</p>

          <h4 className='text-lg font-semibold'>Data Handling</h4>
          <p>In order to populate the page with data and allow the user to interact with the data it is necessary to interact with the backend API I created.</p>
          <p>For the purpose of development, by setting up a proxy in the vite settings for react, you can send HTTP requests from within the react application to endpoints such as <CodeBlock text='POST /api/users' /> to carry out this interaction.</p>
          <p>However in the production build of the app, the frontend is server as a static folder. As a result requests can still be made to the same endpoints without the need for a proxy server</p>
          <p>I used the library <CodeBlock text='axios'/> to perform these specific fetch requests by supplying a method, endpoint and body.</p>
          <p>In order to facilitate these queries I used the library <CodeBlock text='Tanstack Query' />. This library allows me to call a fetch request while monitoring the state of the request (pending, error, success) and handle the data it returns correctly.</p>
          <p>Part of handling the data is ensuring that if a change is made to the backend data such as adding a workout or changing a user's name, the data on the frontend is reloaded as needed to ensure only the most up to date data is rendered for the user.</p>
          <p>Tanstack Query works by declaring a query/mutation function with instructions on what axios request to make (including what endpoint and body data to use) and how to handle the data that is returned. This query/mutation function is then called within the react component either as part of rendering the page in the case of data fetching, or as a response to a user action in the case of a data mutation.</p>
          <p>Data that may be used throughout the application such as the data of the currently logged in user is stored in a global state store using the <CodeBlock text='zustand' /> library.</p>
          <p>I declared a state object to hold the currently logged in user using zustand's store feature which is set to the data returned when a user successfully logs in and then is updated/removed when a user edits their data or logs out.</p>
          <p>This user data is then used for things such as populating the header with the user's name.</p>

          <h4 className='text-lg font-semibold'>Frontend Error Handling</h4>
          <p>There are a number of errors that can be presented to users as they navigate the site. One simple error is navigating to an endpoint with no designated page to render. In this case I created a fallback page that informs the user that the page they attempted to go to does not exist and allows them to navigate either to the previous page or the home page.</p>
          <p>The main source of errors for the user comes with interacting with the backend.</p>
          <p>The use of Tanstack Query allows me to monitor requests for if they enter into error states, in this case I can relay this info back to the user using toasts.</p>
          <p>These toasts contain messages, that inform the user of the nature of the error such as 'Error fetching workouts' or 'Failed to authorise user' allowing the user to retry whatever action caused the error.</p>


          <h3 className='font-semibold text-xl'>Deployment</h3>
          <p>Once I had completed the development of the site it was time to prepare it for deployment.</p>
          <p>In order to achieve this I removed the vite dev server and instead used the build command to turn the vite project into a static folder containing the files. I then changed the backend so that it served the static folder on endpoints such as <CodeBlock text='/login'/> so that the entire sit can be reached from the same port.</p>
          <p>I then used docker to containerise the project using a Dockerfile containing the build instructions and docker compose via the compose.yaml file to initialise the environment abnd build the container.</p>
          <p>Once the app could be successfully deployed from the container I then used the host railway to deploy the site from the GitHub repository. As a result of this the app is automatically redeployed whenever a change is push to the GitHub repo. As part of the deployment I had to feed the sensitive environment variables into railway such as the connection string for the database.</p>
          <p>I then attached the railway hosted site to the workouts.lewis-miller.dev subdomain of my website allowing the site to be public accessed.</p>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center gap-4  mx-4 md:max-w-180 w-full text-2xl">
        <h1 className='font-semibold text-2xl'>Website Links</h1>
        <a className="flex items-center gap-2 pl-4 hover:text-blue-600 transition duration-300" href="https://workouts.lewis-miller.dev/" target='_blank'>
          <p>workouts.lewis-miller.dev</p>
          <FaExternalLinkAlt className='text-xl' />
        </a>
        <a className="flex items-center gap-2 pl-4 hover:text-blue-600 transition duration-300" href="https://github.com/Lewis-27/workout-tracker" target='_blank'>
          <p >GitHub Repository</p>
          <FaExternalLinkAlt className='text-xl' />
        </a>
      </div>
      
    </div>
  )
}

export default BlogProjectScreen
