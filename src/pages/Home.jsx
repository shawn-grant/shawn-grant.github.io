import React, { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'
import WAVES from 'vanta/dist/vanta.waves.min'

function Home() {
    const [vantaEffect, setVantaEffect] = useState(0);
    const waveBackgroundRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(WAVES({
                el: waveBackgroundRef.current,
                THREE: THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                height: '100%',
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x5489,
                shininess: 36.00,
                waveHeight: 15.50,
                waveSpeed: 1.05,
                zoom: 1.00,
            }))
        }
        return () => {
            //if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect]);
    
    return (
        <div className='Home' ref={waveBackgroundRef}>
            <div className="hero">
                <h1>Shawn Grant</h1>
                <h2 style={{height: 500, }}>dd</h2>
            </div>
        </div>
    );
}

export default Home