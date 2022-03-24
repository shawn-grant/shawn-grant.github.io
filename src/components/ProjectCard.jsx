import React from 'react'
import './style/projectcard.css'

function ProjectCard({project}) {
    return (
        <div className='ProjectCard'>
            <p className='title'>{project.name}</p>
            <p>{project.description}</p>
            <br />

            <small><i className='bi bi-code'/> Made With: </small>
            <div className="madewith">
                {project.madeWith.map((item, key) =>
                    <span key={key}>{item}</span>
                )}
            </div>
            
            <br />

            {project.link !== ''
                ? <a className='link' href={project.link} target='_blank' rel="noreferrer">
                    {project.linkText} <i className='bi bi-box-arrow-up-right'/>
                </a>
                : <button className='no-link' disabled>
                    {project.linkText} <i className='bi bi-clock-history' />
                </button>
            }
            
        </div>
    );
}

export default ProjectCard