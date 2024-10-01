import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddUser from './components/AddUser'
import AllUsers from './components/AllUsers'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='bg-green-400 min-h-screen'>
      <div className='fixed top-0 left-0 w-full'>
        <Navbar />
      </div>
      <div className='pt-16'>
        <Routes>
          <Route path='/' element={<AddUser/>}/>
          <Route path='/users' element={<AllUsers/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App