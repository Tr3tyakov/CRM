import React from 'react';
import './App.scss';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import StartPage from './components/StartPage/StartPage'
import Navigation from './components/Navigation/Navigation'

import Main from './components/Navigation/Main/Main'
import Orders from './components/Navigation/Orders/Orders'
import Scores from './components/Navigation/Scores/Scores'
import Statement from './components/Navigation/Statement/Statement'
import Users from './components/Navigation/Users/Users'


function App(){
  

  return(
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path='/' element={<StartPage/>}/>
      <Route path='/Main' element={<Main/>}/>
      <Route path='/Orders' element={<Orders/>}/>
      <Route path='/Scores' element={<Scores/>}/>
      <Route path='/Statement' element={<Statement/>}/>
      <Route path='/Users' element={<Users/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}


export default App;