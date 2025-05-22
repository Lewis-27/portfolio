import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import WelcomeScreen from './screens/WelcomeScreen';
import AboutMeScreen from './screens/AboutMeScreen.jsx';
import ProjectsScreen from './screens/ProjectsScreen.jsx';
import ContactScreen from './screens/ContactScreen.jsx';
import BlogProjectScreen from './screens/BlogProjectScreen.jsx';
import PortfolioProjectScreen from './screens/PortfolioProjectScreen.jsx';

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/portfolio/' element={ <App /> }>
        <Route index path='/portfolio/' element={ <WelcomeScreen /> }/> 
        <Route path='/portfolio/about-me' element={ <AboutMeScreen /> }/>
        <Route path='/portfolio/projects' element={ <ProjectsScreen /> }/>
        <Route path='/portfolio/projects/portfolio' element={ <PortfolioProjectScreen /> }/>
        <Route path='/portfolio/projects/blog' element={ <BlogProjectScreen /> }/>
        <Route path='/portfolio/contact' element={ <ContactScreen /> }/>
      </Route>
      )
  );

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
