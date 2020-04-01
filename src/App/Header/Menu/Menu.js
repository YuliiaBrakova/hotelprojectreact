import React from 'react'
import {Link} from 'react-router-dom'



import './menu.css'

const Menu = () => {
    return (
        <div className="nav">
             <Link to='/' className="nav_link">HOME</Link>
             <Link to='/' className="nav_link">ABOUT US</Link>
             <Link to='/' className="nav_link">ROOMS</Link>
             <Link to='/' className="nav_link">PORTFOLIO</Link>
             <Link to='/' className="nav_link">BLOG</Link>
             <Link to='/' className="nav_link">CONTACT</Link>
        </div>
    )
}
export default Menu 