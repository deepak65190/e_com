import React from 'react'
import { Router ,Route } from 'react-router-dom' ;
import Home from './components/Home';
const AllRoutes = () => {
  return (
    <Router>
      <Route path='/' element={<Home/>}/>
    </Router>
  )
}

export default AllRoutes
