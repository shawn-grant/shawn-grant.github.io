import React, { useEffect, useRef } from 'react'
import projects from "../../data/projects.json"
import './projects.scss'

function ProjectSection() {
    return (
        <div className='ProjectSection' id='projects'>
            <div className="content">
                <h1>My Projects</h1>
                <p>Projects I've worked on myself and in teams.</p>

                <div className="list">
                    {projects.map((project, i) =>
                        <ProjectCard key={i} project={project} />
                    )}
                </div>
            </div>
        </div>
    )
}


interface CardProps {
    project: {
        name: string;
        description: string;
        madeWith: string[];
        tags: string[];
        liveUrl: string;
        sourceUrl: string;
    }
}

function ProjectCard({project}: CardProps) {
    const card = useRef<HTMLDivElement>(null)
    const blob = useRef<HTMLDivElement>(null)

    useEffect(() => {
        card.current?.addEventListener("mousemove", function(event) {
            blob.current!.classList.add("show");
            var containerRect = card.current?.getBoundingClientRect();
            var x = event.clientX - (containerRect?.left ?? 0) - (blob.current?.clientWidth ?? 0) / 2;
            var y = event.clientY - (containerRect?.top ?? 0) - (blob.current?.clientHeight ?? 0) / 2;
            blob.current!.style.left = x + "px";
            blob.current!.style.top = y + "px";
        });
        
        card.current?.addEventListener("mouseleave", function (event) {
            blob.current!.classList.remove("show");
        });
    }, [])

    return (
        <div ref={card} className="project-card">
            <div ref={blob} className="blob"></div>
            <h1 className='name'>{project.name}</h1>
            <p className='desc'>{project.description}</p>

            <div className="tech-stack">
                <span><i className='bi-code-slash'/> Made With:</span>
                <ul>
                    {project.madeWith.map((tech, i) =>
                        <li key={i}>{tech}</li>
                    )}
                </ul>
            </div>
            
            <div className="links">
                {project.sourceUrl !== "" &&
                    <a href={project.sourceUrl} target='_blank' rel="noreferrer">
                        <i className='bi bi-github' /> View Source 
                    </a>
                }
                {project.liveUrl == ""
                    ? <a href="#" rel="noreferrer" className='disabled'>
                        Unpublished <i className='bi bi-hourglass-split' />
                    </a>
                    : <a href={project.liveUrl} target='_blank' rel="noreferrer">
                        View Live <i className='bi bi-box-arrow-up-right' />
                    </a>
                }
            </div>
        </div>
    );
}


export default ProjectSection