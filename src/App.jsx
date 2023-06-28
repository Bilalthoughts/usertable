import React from 'react'
import './App.css'
import Home from './pages/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from './components/create'
import Update from './components/update'
import Read from './components/read'

function App() {


  return (
   < >
   <BrowserRouter>
   <div >


   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/create' element={<Create/>} />
    <Route path='/update/:id' element={<Update/>} />
    <Route path='/read/:id/' element={<Read/>} />




   
   </Routes>
   </div>
   </BrowserRouter>
   </>
  )
}

export default App
