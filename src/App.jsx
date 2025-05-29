import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import { useState } from 'react'


const App = () => {
  const [showHeader, setShowHeader] = useState(false);

  return (
    <>
      <Header showHeader={showHeader} setShowHeader={setShowHeader}/>
      <div className={`${showHeader ? 'hidden' : 'absolute'} top-0 h-screen w-screen bg-gray-100 opacity-75 z-1` }>

      </div>
      <Outlet />      
    </>

  )
}

export default App
