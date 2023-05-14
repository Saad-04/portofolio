import React from 'react'
import {NavLink} from 'react-router-dom'
function AllButton(props) {
  return (
    <>
        <button className='homebtn xs:p-1 xs:px-2 xs:text-porbg bg-por hover:bg-porbg
         hover:text-por hover:duration-500 rounded-2xl lg:text-xl lg:px-3' data-aos="fade-up" ><NavLink to={props.link}>Contact Us</NavLink></button>
    </>
  )
}

export default AllButton