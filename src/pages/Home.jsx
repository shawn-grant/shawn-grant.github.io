import React, { useRef, useState, useEffect } from 'react'
import './style/home.css'
import * as THREE from 'three'
import WAVES from 'vanta/dist/vanta.waves.min'
import projects from '../data/MyProjects';
import ProjectCard from '../components/ProjectCard';
import experience from '../data/MyExperience';
import ExperienceCard from './../components/ExperienceCard';

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
                <h2 id='subtitle'>Software Developer | Student</h2>

                <br />
                <div className="socials">
                    <a href='https://github.com/shawn-grant' target='_blank' rel="noreferrer">
                        <i className='bi bi-github'/>
                    </a>
                    <a href='https://www.linkedin.com/in/shawn-grant-431b39109/' target='_blank' rel="noreferrer">
                        <i className='bi bi-linkedin'/>
                    </a>
                    <a href='https://instagram.com/shawnrgrant' target='_blank' rel="noreferrer">
                        <i className='bi bi-instagram'/>
                    </a>
                    <a href='mailto:shawngrant333@gmail.com' target='_blank' rel="noreferrer">
                        <i className='bi bi-envelope'/>
                    </a>
                </div>

                <a id='resume' href='https://docs.google.com/document/d/1PDOooSUSkq_dCKqhsZPk8MBHrpRWa-Kju2_vuGA5Ph0/edit?usp=sharing' target='_blank' rel="noreferrer">
                    Resume <i className='bi bi-box-arrow-up-right'/>
                </a>
            </div>

            <div className="section projects">
                <h3 style={{ textAlign: 'center', margin:'0px' }}>Hi there,</h3>
                <p style={{ textAlign: 'center', fontWeight:'bold' }}>
                    I'm a software developer &amp; CS student with a passion for art and design. <br />
                    I enjoy creating and learning new things.
                </p>
                <br />
                <br />
                
                <h1 className='header'>My Projects</h1>
                <div className="list">
                    {projects.map((project, key) =>
                        <ProjectCard key={key} project={project}/>
                    )}
                </div>
            </div>

            <div className="section experience">
                <h1 className='header'>Skills</h1>
                <div className="list">
                    <span className='skill'>HTML &amp; CSS</span>
                    <span className='skill'>Javascript</span>
                    <span className='skill'>Typescript</span>
                    <span className='skill'>Flutter</span>
                    <span className='skill'>Node.js</span>
                    <span className='skill'>React.js</span>
                    <span className='skill'>Firebase</span>
                    <span className='skill'>Android (Kotlin)</span>
                    <span className='skill'>SASS</span>
                    <span className='skill'>C#</span>
                    <span className='skill'>SQL</span>
                    <span className='skill'>Unity3D</span>
                    <span className='skill'>Java</span>
                    <span className='skill'>C/C++</span>
                    <span className='skill'>Python</span>
                    <span className='skill'>Git</span>
                </div>
                <h1 className='header'>Experience</h1>
                <br />

                <div className="list">
                    {experience.map((exp, key) =>
                        <ExperienceCard key={key} experience={exp}/>
                    )}
                </div>
            </div>

            <div className="section contact">
                <h1 className='header'>Get In Touch</h1>
                <br />

                <div className="socials">
                    <a href='https://github.com/shawn-grant' target='_blank' rel="noreferrer">
                        <i className='bi bi-github'/>
                    </a>
                    <a href='https://www.linkedin.com/in/shawn-grant-431b39109/' target='_blank' rel="noreferrer">
                        <i className='bi bi-linkedin'/>
                    </a>
                    <a href='https://instagram.com/shawnrgrant' target='_blank' rel="noreferrer">
                        <i className='bi bi-instagram'/>
                    </a>
                    <a href='mailto:shawngrant333@gmail.com' target='_blank' rel="noreferrer">
                        <i className='bi bi-envelope'/>
                    </a>
                </div>
                <br />
                <br />
                <br />

                <small style={{textAlign: 'center'}}>Designed with 🤍 by yours truly</small>
            </div>
          
        </div>
    );
}

export default Home