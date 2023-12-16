import Navbar from '../Navbar/Navbar';
import './hero.scss';
import { useRandomReveal } from 'react-random-reveal';

function HeroSection() {
    const characters = useRandomReveal({
        isPlaying: true,
        duration: 1.5,
        revealDuration: 1,
        characters: 'Shawn Grant'
      })
        
    return (
        <div className='HeroSection'>
            <Navbar />
            <div className="content">
                <h3>Hi <span>👋</span>, I'm</h3>
                <h1 className='title'>{characters || 'Shawn Grant'}</h1>
                <h2 className='subtitle'>Software Developer</h2>
                <br />
                <div className="socials">
                    <a href='https://github.com/shawn-grant' target='_blank' rel="noreferrer">
                        <i className='bi bi-github' />
                    </a>
                    <a href='https://www.linkedin.com/in/shawn-grant-431b39109/' target='_blank' rel="noreferrer">
                        <i className='bi bi-linkedin' />
                    </a>
                    <a href='https://instagram.com/shawnrgrant' target='_blank' rel="noreferrer">
                        <i className='bi bi-instagram' />
                    </a>
                    <a href='mailto:shawngrant333@gmail.com' target='_blank' rel="noreferrer">
                        <i className='bi bi-at' />
                    </a>
                </div>
                <br />
                <a className='resume' href='https://docs.google.com/document/d/1PDOooSUSkq_dCKqhsZPk8MBHrpRWa-Kju2_vuGA5Ph0/edit?usp=sharing' target='_blank' rel="noreferrer">
                    My Resume <i className='bi bi-box-arrow-up-right' />
                </a>
            </div>
        </div>
    );
}

export default HeroSection