import React from 'react'
import {Route ,Routes } from 'react-router-dom' ;
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import SinglePage from './components/SinglePage';
import NotFound from './components/NotFound';
import CardCom from './components/CardCom';
const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/cart' element={<CardCom/>}/>
      <Route path='/:productID' element={<SinglePage/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default AllRoutes
