import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Manager from './Components/Manager'
import Footer from './Components/footer'

function App() {
  
  return (
    <>
      <Navbar/>
      
      <div className='min-h-[87.2vh]'>
        <Manager/>
      </div>
      
      <Footer/>
    </>
  )
}

export default App
