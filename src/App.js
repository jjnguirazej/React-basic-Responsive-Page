import React,{useState, useEffect} from 'react';

import './App.css';
import Navbar from './components/Navbar'
import Dropdown from './components/Dropdown'
import Footer from './components/Footer'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/'
import About from './pages/about';
import Menu from './pages/menu';
function App() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle =() =>{
    setIsOpen(!isOpen);
  }
  useEffect(() =>{
    const hideMenu = ()=>{
      if(window.innerWidth > 768 && isOpen){
        setIsOpen(false)
      }
    }

    window.addEventListener('resize',hideMenu)
    return () =>{
      window.removeEventListener('resize',hideMenu)
    }
  })
  return (
  <>
  <Navbar toggle={toggle}/>
  <Dropdown isOpen={isOpen} toggle={toggle}/>
 <Routes>
   <Route path='/' exact element={<Home/>}/>
   <Route path='/menu' exact element={<Menu/>}/>
   <Route path='/about' exact element={<About/>}/>


 </Routes>
  <Footer/>

  </>
  );
}

export default App;
