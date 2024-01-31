import "./App.css"
import React from 'react'

import ReactDOM from 'react-dom/client'
import Templete from "./components/Templete"
import Home from './components/Home'
import {Routes,Route,BrowserRouter} from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Templete/>}>
  <Route path="/" element={<Home/>}/>
  </Route>
  </Routes>
  
  </BrowserRouter>
)
