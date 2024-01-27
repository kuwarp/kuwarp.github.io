import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import  {Navbar, Homepage,Footer,  Evolution, Management, Careers, Contact}  from '../src/components'

import {Banking,Commercial,Ecom,Education,HrServices,Warehouse} from '../src/components/Evolutions'
import Work from './components/Evolutions/Work'
import { Darkmode } from './common'
const Main = () => {
  return (
   <main className="page-wrapper" >
     <Navbar btnStyle="btn-small round btn-icon" HeaderSTyle="header-not-transparent"
    />
    
    
      <Routes>
          
          <Route exact path='/' element={<Homepage />}/>
           <Route exact path='/about-me' element={<Evolution />}/>
           <Route exact path='/teams' element={<Management />}/>
           <Route exact path='/careers' element={<Careers />}/>
           <Route exact path='/contact' element={<Contact />}/>


           {/* Evoultion Links */}
           <Route exact path='/automated-hr-services' element={<HrServices />}/>
         
           <Route exact path='/work' element={<Work />}/>
           <Route exact path='/r-e-project-solution' element={<Commercial />}/>
           <Route exact path='/educations' element={<Education />}/>
           <Route exact path='/e-commerce' element={<Ecom />}/>
           <Route exact path='/retail-warehouse' element={<Warehouse />}/>
          </Routes>
          <Footer/>
          <div className=" darkmode-container">
    <Darkmode className=""/></div>
   </main>
  )
}


export default Main













