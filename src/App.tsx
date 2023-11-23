import React from 'react'
import './components/Header.css'
/* router */
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import Header from './components/Header'

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
