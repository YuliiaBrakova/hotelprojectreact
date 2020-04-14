import React from 'react'
import {Link} from 'react-router-dom'



import './menu.css'

const Menu = () => {
    return (
        <div className="nav">
             <Link to='/' className="nav_link">HOME</Link>
             <Link to='/aboutus' className="nav_link">ABOUT US</Link>
             <Link to='/rooms' className="nav_link">ROOMS</Link>
             <Link to='/portfolio' className="nav_link">PORTFOLIO</Link>
             <Link to='/blog' className="nav_link">BLOG</Link>
             <Link to='/contact' className="nav_link">CONTACT</Link>
             <Link to='/wishlist' className="nav_link">WISHLIST</Link>
        </div>
    )
}
export default Menu 