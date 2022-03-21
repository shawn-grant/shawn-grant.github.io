import React from 'react'
import './style/projectcard.css'

function ProjectCard({project}) {
    return (
        <div className='ProjectCard'>
            <h3>{project.name}</h3>
        </div>
    );
}

export default ProjectCard