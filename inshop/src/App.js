import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Categories from './Pages/Categories'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Navbar from './components/Navbar'

const App = () => {
  return (


    <Router>
     <Header/>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/products' exact element={<Products />} />
        <Route path='/categories' exact element={<Categories />} />
        <Route path='/about' exact element={<About />} />
        <Route path='/contact' exact element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App