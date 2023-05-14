import Header from './components/header/Header'
import './index.css'
import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './components/home/Home'
import About from './components/about/About'
import Service from './components/service/Service'
import Contact from './components/contact/Contact'
import Message from './components/mesaage/Message'
function App() {


  return (
   <> <div className="app overflow-x-hidden ">

<Header/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/service' element={<Service/>}/>
<Route path='/message' element={<Message/>}/>
<Route path='/contact' element={<Contact/>}/>
</Routes>
</div>
   </>
  )
}

export default App
