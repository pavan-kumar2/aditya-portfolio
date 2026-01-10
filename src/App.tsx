import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Slider from './components/Slider/Slider'
import Overlay from './components/Overlay/Overlay'
import { useSelector } from 'react-redux'

function App() {

  const overlay = useSelector((state: any) => state.overlay)

  return (
    <>
      <Header />
      <Slider />
      {overlay.isOpen && <Overlay />}
    </>
  )
}

export default App
