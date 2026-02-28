// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './layouts/Header/Header'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Gallery from './pages/Gallery/Gallery'
import MainLayoutWrapper from './pages/MainLayoutWrapper/MainLayoutWrapper'
import Footer from './layouts/Footer/Footer'
import GalleryView from './pages/GalleryView/GalleryView'
import WhatsAppBtn from './components/WhatsAppBtn/WhatsAppBtn'
import FullScreenBtn from './components/FullScreenBtn/FullScreenBtn'
import HiddenBtn from './components/HiddenBtn/HiddenBtn'


function App() {

  // const overlay = useSelector((state: any) => state.overlay)

  return (
    <>
      {/* {overlay.isOpen && <Overlay />} */}
      <Header />
      <main>
        <Routes>
          <Route path='/' element={
            <MainLayoutWrapper></MainLayoutWrapper>
          }>
          </Route>
          <Route path='/gallery' element={<Gallery />}></Route>
          <Route path='/gallery/:id/view' element={<GalleryView />} />
        </Routes>
      </main>


      <WhatsAppBtn />
      <FullScreenBtn />
      <HiddenBtn />
      <Footer />


    </>
  )
}

export default App
