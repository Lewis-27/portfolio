import React from 'react'
import {useState} from 'react'

const ContactScreen = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className='flex flex-col items-center justify-center h-180 w-full text-4xl gap-8'>
      <div className="flex flex-col items-start justify-center gap-4  mx-4 md:max-w-180 md:w-full text-2xl">
        <h1 className='font-semibold'>Contact</h1>
        <p className="text-2xl text-gray-500 font-light">Below are a few ways to contact me or view my information. Feel free to send me a message if you have any questions about me or my projects.</p>
        <div className="font-semibold text-xl flex gap-1">
          <div className="">Email:</div>
          <div className="font-normal">Lewis-270500@gmail.com</div>
        </div>
        <div className="font-semibold text-xl flex gap-1">
          <div className="">Website:</div>
          <a href='https://lewis-miller.dev' className="font-normal hover:text-blue-600 transition duration-300">https://lewis-miller.dev</a>
        </div>
        <div className="font-semibold text-xl flex gap-1">
          <div className="">GitHub:</div>
          <a href='https://github.com/Lewis-27' className="font-normal hover:text-blue-600 transition duration-300">https://github.com/Lewis-27</a>
        </div>
        <div className="font-semibold text-xl flex gap-1">
          <div className="">LinkedIn:</div>
          <a href='https://www.linkedin.com/in/lewis-miller-a788a9331/' className="font-normal hover:text-blue-600 transition duration-300">https://www.linkedin.com/in/lewis-miller-a788a9331/</a>
        </div>
      </div>
    </div>
  )
}

export default ContactScreen
