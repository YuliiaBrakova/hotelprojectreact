import React from 'react'
import {Link} from 'react-router-dom'

import logo from './logo.png'

const Logo = () => {
    return (
        <div className="logo_hotel">
            <Link to='/'> <img src={logo} alt="logo"/></Link>
        </div>
    )
}
export default Logo 