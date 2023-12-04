import React from 'react'
/* router */
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'
import Main from './components/Main'
import Header from './components/Header'

function App() {
  return (
    <React.Fragment>
      <BrowserRouter basename="/tunsay-portfolio">
        <Header />
        <ParallaxProvider>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </ParallaxProvider>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
