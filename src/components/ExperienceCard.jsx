import React from 'react'
import './style/experiencecard.css'

function ExperienceCard({experience}) {
    return (
        <div className='ExperienceCard'>
            <p className='position'>{experience.position}</p>
            <p className='company'>{experience.company}</p>
            <small className='time'>{experience.timePeriod}</small>
            <p>{experience.description}</p>
            <br />

            {experience.link !== '' &&
                <a className='link' href={experience.link} target='_blank' rel="noreferrer">
                    View <i className='bi bi-box-arrow-up-right'/>
                </a>
            }
        </div>
    );
}

export default ExperienceCard