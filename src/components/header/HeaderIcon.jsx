import React from 'react'
import {NavLink} from 'react-router-dom'
import '../ShortsCuts/oas'
function HeaderIcon({home,about,skill,message,contact}) {
  return (
    <>
         <div className=""><h3 data-aos="fade-up"><NavLink className='nav' to='/'>{home}</NavLink> </h3> </div>

            <div className=""><h3 data-aos="fade-up"> <NavLink className='nav'to='/about'>{about}</NavLink></h3></div> 

            <div className=""><h3 data-aos="fade-right"><NavLink className='nav'to='/service'>{skill}</NavLink></h3>  </div>

            <div className=""><h3 data-aos="fade-down"><NavLink className='nav'to='/message'>{message}</NavLink></h3>  </div>
            
            <div className=""><h3 data-aos="fade-left"><NavLink className='nav'to='/contact'>{contact}</NavLink></h3>  </div>
    </>
  )
}

export default HeaderIcon