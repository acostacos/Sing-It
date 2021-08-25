import React, { useState, useEffect } from 'react';

import '../css/components/LandingPage.css';
import landingPageImg from '../images/LandingPage.png';
import triangleImg from '../images/Triangle.png';

function LandingPage() {
    const [triangles, setTriangles] = useState([]);
    let rotationOffset = 0;

    useEffect(() => {
        generateTriangles();
        window.addEventListener('resize', generateTriangles);
        const intervalId = setInterval(rotateTriangle, 100);

        return () => {
            window.removeEventListener('resize', generateTriangles);
            clearInterval(intervalId);
        };
    }, []);

    const rotateTriangle = () => {
        rotationOffset += 1;
        if(rotationOffset === 360) rotationOffset=0;
    }

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
                
                const triangleStyle = {
                    backgroundImage: `url(${triangleImg})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    transform: `rotate(${generateRandomRotate()}deg)`,
                    height: '15px',
                    width: '15px',
                    position: 'absolute',
                    top: `${y}px`,
                    left: `${x}px`,
                    zIndex: 5,
                };
                initTriangles.push(triangleStyle);
            }
            x = 0;
        } 
        
        setTriangles(initTriangles);
    }

    const generateRandomCoordinate = (base, deviation) => {
        return base + Math.floor(Math.random()*deviation);
    }

    const generateRandomRotate = () => {
        return Math.floor(Math.random()*360);
    }

    return (
        <div className='landing'>
            <img className='landing-logo' src={landingPageImg} alt='Landing Page Logo' />
            <div className='triangles'>
                {triangles.map((triangle, index) => {
                    return <div key={index} style={triangle}></div>;
                })}
            </div>
        </div>
    )
}

export default LandingPage;