import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Slider from './components/Slider/Slider'
import Overlay from './components/Overlay/Overlay'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Slider />
      {/* <Overlay /> */}
    </>
  )
}

export default App
