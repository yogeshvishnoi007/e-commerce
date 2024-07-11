import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import Products from './Components/Products'
import Cart from './Components/Cart'
import Product from './Components/Product'




const App = () => {
  return (
    <>
    <BrowserRouter>
       <Navbar/>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/products' element={<Products/>}/>
         <Route path='/products/:id' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
       </Routes>
       <Footer/>
    </BrowserRouter>
   
    </>
  )
}

export default App
