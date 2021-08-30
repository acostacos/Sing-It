import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../css/components/Navbar.css';  

function Navbar(props) {
    const [isMinMenuExpanded, setIsMinMenuExpanded] = useState(false)

    useEffect(() => {
        setIsMinMenuExpanded(false);
    }, [props.minimized]);

    return (
        <React.Fragment>
            <nav className={props.minimized ? 'minimized' : ''}>
                {!props.minimized && (
                <ul className='nav-items'>
                    <li className='nav-item'><Link to='/'>HOME</Link></li>
                    <li className='nav-item'><Link to='/play'>PLAY</Link></li>
                </ul>)} 
            </nav>
            <div id='min-menu' className={props.minimized ? '' : 'invisible'}>
                {props.minimized && (
                <React.Fragment>
                    <button className='min-menu-button' onClick={() => setIsMinMenuExpanded(true)}>
                        <i className='fas fa-arrow-left'></i>
                    </button>
                    <div className={`min-menu-body ${isMinMenuExpanded ? 'expanded' : ''}`}>
                        <div className='min-menu-icons'>
                            <button className='min-menu-close-button' onClick={() => setIsMinMenuExpanded(false)}>
                                <i className='fas fa-times'></i>
                            </button>
                        </div>
                        <ul className='min-nav-items'>
                            <li className='nav-item'><Link to='/'>HOME</Link></li>
                            <li className='nav-item'><Link to='/play'>PLAY</Link></li>
                        </ul>
                    </div>
                </React.Fragment>   
            )}
            </div>
        </React.Fragment>
    )
}

export default Navbar;