import { useState } from 'react'
import Header from "./components/Navbar/Header"
import HomePage from "./components/Pages/Main/HomePage"
import AboutJamsPage from './components/Pages/Main/AboutJamsPage'
import WhoCanJoinPage from './components/Pages/Main/WhoCanJoinPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


//Context
  import { AuthProvider } from './context/AuthContext'
//Modal
  import AuthModal from './components/Modal/AuthModal'
function App() {

  return (
    <Router>
          <AuthProvider>
          <Header/>
          
          <AuthModal/>
        <Routes>
          <Route path="/" element = {<HomePage/>}/>
          <Route path="/about-jams" element ={<AboutJamsPage/>}/>
          <Route path="/who-can-join" element={<WhoCanJoinPage/>}/>
        </Routes>
        </AuthProvider>
    </Router>
  )
}

export default App
