// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './layouts/Header/Header'
import { useSelector } from 'react-redux'
import FloatingBtn from './components/FloatingBtn/FloatingBtn'
import { Route, Routes } from 'react-router-dom'
import Gallery from './pages/Gallery/Gallery'
import MainLayoutWrapper from './pages/MainLayoutWrapper/MainLayoutWrapper'
import Footer from './layouts/Footer/Footer'
import GalleryView from './pages/GalleryView/GalleryView'

function App() {

  // const overlay = useSelector((state: any) => state.overlay)

  return (
    <>
      {/* {overlay.isOpen && <Overlay />} */}
      <Header />
      <FloatingBtn />
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
      <Footer />
    </>
  )
}

export default App
