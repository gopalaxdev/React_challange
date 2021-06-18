import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div>
            <ul>
                <li><Link className='navbar__link' to="/">Home</Link></li>
                <li><Link className='navbar__link' to="/blogs">Blogs</Link></li>

            </ul>
        </div>
    )
}

export default Navbar
