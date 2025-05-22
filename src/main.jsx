import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import WelcomeScreen from './screens/WelcomeScreen';

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={ <App /> }>
        <Route index path='/' element={ <WelcomeScreen /> }/> 
      </Route>
      )
  );

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
