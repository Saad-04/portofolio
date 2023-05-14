
import React from 'react'
import Footer from '../footer/Footer';
import Message from '../mesaage/Message';

import Service from '../service/Service';
import Homecomponent from './Homecomponent';
// import { NavLink } from 'react-router-dom'
function Home() {
  return (
<>
   <Homecomponent/>
    <Service/>
    <Message/>
    <Footer/>
  </>
  )
}

export default Home