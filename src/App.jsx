import React from "react";
import { Routes,Route, BrowserRouter } from "react-router-dom"
import App1 from "./components/homepage";
import About from "./components/about";
import Login from "./components/loginpage";
import Navbar1 from "./components/navbar1";
import Product from "./components/product";
import Contact from "./components/contact";



function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path = '/' element = {< Navbar1 />}></Route>
        <Route path = 'homepage' element = {<App1/>}></Route>
        <Route path = 'about' element = {<About/>}></Route>
        <Route path = 'product' element = {< Product/>}></Route>
        <Route path = 'contact' element = {<  Contact/>}></Route>
        <Route path = 'login' element = {<Login/>}></Route>


 


      </Routes>
      </BrowserRouter>

    
    </>
  )
}

export default App
