import React from 'react';

import '../css/components/Navbar.css';  

function Navbar() {
    return (
        <nav>
            <ul className='nav-items'>
                <li className='nav-item'><a href="#">HOME</a></li>
                <li className='nav-item'><a href="#">PLAY</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;