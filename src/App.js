import React from 'react'
import Contact from './components/Contact'
import Home from './components/Home'
import { Routes, Route, Link } from "react-router-dom";


const App = () => {
  return (
    <div>
       <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Home/> */}
    </div>
  )
}

export default App