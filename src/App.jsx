import React from 'react'
import './App.css'
import Welcome from "./pages/Welcome.jsx"
import AccountSettings from "./pages/AccountSettings.jsx"
import Register from "./pages/Register.jsx"
import Signin from "./pages/Signin.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    <main className='app-container'>
      <section className='app'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/register' element={<Register />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/accountsettings' element={<AccountSettings />} />
          </Routes>
        </BrowserRouter>
      </section>
    </main>
  )
}

export default App
