import React, { useState, useEffect } from 'react';

import '../css/pages/PlayPage.css';

function PlayPage(props) {
    const [isMenuBtnInvisible, setIsMenuBtnInvisible] = useState(true)

    useEffect(() => {
        props.setIsNavMin(true);
        setIsMenuBtnInvisible(false);
    }, [])

    return (
        <div className='game-screen'>
            <button className={`game-menu-button ${isMenuBtnInvisible ? 'invisible' : ''}`}>
                <i className='fas fa-bars'></i>
            </button>
        </div>
    )
}

export default PlayPage
