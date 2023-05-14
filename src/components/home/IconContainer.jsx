import React from 'react'
import "../ShortsCuts/oas"
import {NavLink} from 'react-router-dom'
 function IconContainer(props) {
  return (
    <div  className="div rounded-3xl border p-2 bg-porbg text-por border-por cursor-pointer hover:text-porbg hover:bg-por hover:duration-500 homebtn" data-aos={props.aos}>
    <NavLink target='_blank' to={props.path}>
        {props.icon}
    </NavLink>
    </div>
  )
}

export default IconContainer