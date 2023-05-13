import { RandomReveal } from 'react-random-reveal'
import './navbar.scss'
import { useState } from 'react'

export default function Navbar() {
  const [reveal, setReveal] = useState([false, false, false])

  const onMouseOver = (index: number) => {
    setReveal(prevReveal => {
      const newReveal = [...prevReveal]
      newReveal[index] = true
      return newReveal
    })
  }

  const onMouseOut = (index: number) => {
    setReveal(prevReveal => {
      const newReveal = [...prevReveal]
      newReveal[index] = false
      return newReveal
    })
  }

  return (
    <div className='Navbar'>
      <a className='nav-link' href="#projects" onMouseOver={() => onMouseOver(0)} onMouseOut={() => onMouseOut(0)}>
        {reveal[0] ?
          <RandomReveal
            isPlaying={reveal[0]}
            duration={1}
            revealDuration={0.5}
            characters="Projects"
          />
          : 'Projects'
        }
      </a>
      <a className='nav-link' href="#experience" onMouseOver={() => onMouseOver(1)} onMouseOut={() => onMouseOut(1)}>
        {reveal[1] ?
          <RandomReveal
            isPlaying={reveal[1]}
            duration={1}
            revealDuration={0.5}
            characters="Experience"
          />
          : 'Experience'
        }
      </a>
      <a className='nav-link' href="#contact" onMouseOver={() => onMouseOver(2)} onMouseOut={() => onMouseOut(2)}>
        {reveal[2] ?
          <RandomReveal
            isPlaying={reveal[2]}
            duration={1}
            revealDuration={0.5}
            characters="Contact"
          />
          : 'Contact'
        }
      </a>
    </div>
  )
}

