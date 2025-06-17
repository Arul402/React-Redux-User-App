import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './components/Home'
import AddUser from './components/AddUser'
import Users from './components/Users'
import Navbar from './components/Navbar'

function App() {
  return (
    // <div>App</div>
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/adduser' element={<AddUser/>}/>
        <Route path='/users' element={<Users/>}/>
      </Routes>
    </Router>
    
    </>
  )
}

export default App