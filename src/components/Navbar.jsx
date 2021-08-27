import React from 'react';
import { Link } from 'react-router-dom';

import '../css/components/Navbar.css';  

function Navbar() {
    return (
        <nav>
            <ul className='nav-items'>
                <li className='nav-item'><Link to='/'>HOME</Link></li>
                <li className='nav-item'><Link to='/play'>PLAY</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;