import { useState } from 'react'
import Header from "./components/Navbar/Header"
import HomePage from "./components/Pages/HomePage"
import AboutJamsPage from './components/Pages/AboutJamsPage'
import WhoCanJoinPage from './components/Pages/WhoCanJoinPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {

  return (
    <Router>
        <Header/>
        <Routes>
            <Route path="/" element = {<HomePage/>}/>
            <Route path="/about-jams" element ={<AboutJamsPage/>}/>
            <Route path="/who-can-join" element={<WhoCanJoinPage/>}/>
        </Routes>
    </Router>
  )
}

export default App
