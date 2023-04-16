import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../../Main/Main'
import DataLocation from '../../Main/DataLocation'
import Shop from '../../Shop/Shop'
const Location = () => {
  return (
    <Routes>
        <Route path='/' exact Component={Main} /> 
        <Route path='/packages' Component={Main} /> 
        <Route path='/shop' Component={Shop} /> 
        <Route path='/about' Component={Main} /> 
        <Route path='/pages' Component={Main} /> 
        <Route path='/:id' Component = {DataLocation}  />
    </Routes>
  )
}

export default Location