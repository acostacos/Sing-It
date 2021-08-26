import React, { useState, useEffect } from 'react';

import '../css/components/LandingPage.css';
import landingPageImg from '../images/LandingPage.png';

function LandingPage() {
    const [trianglePositions, setTrianglePositions] = useState([]);

    useEffect(() => {
        generateTriangles();
        window.addEventListener('resize', generateTriangles);

        return () => {
            window.removeEventListener('resize', generateTriangles);
        };
    }, []);

    const generateTriangles = () => {
        const { innerHeight, innerWidth } = window;
        const initTriangles = [];
        const margin = 50;
        const base = 75;
        const deviation = 50;

        let x = 0;
        let y = 0;
        let increment = generateRandomCoordinate(base,deviation);

        while(y+increment< innerHeight-margin) {
            y += increment 
            increment = generateRandomCoordinate(base,deviation);
            while(x+increment < innerWidth-margin){
                x += increment;
                increment = generateRandomCoordinate(base,deviation);
                
                const triangle = {
                    top: `${y}px`,
                    left: `${x}px`,
                };
                initTriangles.push(triangle);
            }
            x = 0;
        } 
        
        setTrianglePositions(initTriangles);
    }

    const generateRandomCoordinate = (base, deviation) => {
        return base + Math.floor(Math.random()*deviation);
    }

    return (
        <div className='landing'>
            <img className='landing-logo' src={landingPageImg} alt='Landing Page Logo' />
            <div className='triangles'>
                {trianglePositions.map((trianglePosition, index) => {
                    return <div className='triangle' key={index} position={trianglePosition} style={trianglePosition}></div>
                })}
            </div>
        </div>
    )
}

export default LandingPage;