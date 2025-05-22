import React from 'react'

const WelcomeScreen = () => {
  return (
    <div className='flex items-center justify-center h-180 w-full text-5xl'>
      <div className="flex flex-col items-start justify-center gap-2">
        <h1 className='font-semibold'>Hi, I'm Lewis</h1>
        <div className="flex flex-col items-start justify-center gap-1">
          <h2 className='text-gray-500 text-4xl font-light'>A Fullstack developer working</h2>
          <h2 className='text-gray-500 text-4xl font-light'> with the MERN stack</h2>
        </div>
        
      </div>
    </div>
  )
}

export default WelcomeScreen
