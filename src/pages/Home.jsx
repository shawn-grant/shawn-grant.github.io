import React, { useRef, useState, useEffect } from 'react'
import './style/home.css'
import * as THREE from 'three'
import WAVES from 'vanta/dist/vanta.waves.min'
import projects from '../data/MyProjects';
import ProjectCard from '../components/ProjectCard';

function Home() {
    const [vantaEffect, setVantaEffect] = useState();
    const waveBackgroundRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(WAVES({
                el: waveBackgroundRef.current,
                THREE: THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                height: 200.0,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x898989,
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
        <div className='Home'>
            <div id='vanta-bg' ref={waveBackgroundRef}></div>
            
            <div className="section hero">
                <h1 id='title'>Shawn Grant</h1>
                <h2 id='subtitle'>Software Developer | student</h2>

                <br />
                <div className="socials">
                    <a href='https://github.com/shawn-grant'>
                        <i className='bi bi-github'/>
                    </a>
                    <a href='https://github.com/shawn-grant'>
                        <i className='bi bi-linkedin'/>
                    </a>
                    <a href='https://instagram.com/shawnrgrant'>
                        <i className='bi bi-instagram'/>
                    </a>
                    <a href='mailto:shawngrant333@gmail.com'>
                        <i className='bi bi-envelope'/>
                    </a>
                </div>

                <a id='resume' href='https://github.com/shawn-grant'>
                    Resume <i className='bi bi-box-arrow-up-right'/>
                </a>
            </div>

            <div className="section projects">
                <h1 className='header'>My Projects</h1>
                <br />

                <div className="list">
                    {projects.map((project) =>
                        <ProjectCard  project={project}/>
                    )}
                </div>
            </div>

            <div className="section contact">
                <small>Designed with 🤍 by yours truly</small>
            </div>
          
        </div>
    );
}

export default Home