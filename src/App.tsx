import React from 'react'
import './App.css'
/* router */
import { HashRouter, Route, Routes } from 'react-router-dom'
import Main from './components/Main'

function App() {
  return (
    <React.Fragment>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </HashRouter>
    </React.Fragment>
  )
}

export default App
