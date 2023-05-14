import React from 'react'
import './header.css'
import HeaderIcon from './HeaderIcon'

function Header() {



    return (

        <div className="header">
            {/* header left / */}
            <div className="header_left">
                <h3>Portofolio</h3>
            </div>
            {/* header right  */}
            <div className="header_right">
                <HeaderIcon message='Message' about='About' skill='Service' contact='Contact' home='Home' />
            </div>
        </div>

    )
}

export default Header