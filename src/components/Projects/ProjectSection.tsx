import React, { useEffect, useRef } from 'react'
import './projects.scss'

function ProjectSection() {
    return (
        <div className='ProjectSection' id='projects'>
            <h1>My Projects</h1>

            <div className="list">
                {Array(4).fill(0).map((_, i) =>
                   <ProjectCard key={i} />
                )}
            </div>
          
        </div>
    )
}

function ProjectCard() {
    const card = useRef<HTMLDivElement>(null)
    const blob = useRef<HTMLDivElement>(null)

    useEffect(() => {
        card.current?.addEventListener("mousemove", function(event) {
            blob.current!.style.display = "block";
            var containerRect = card.current?.getBoundingClientRect();
            var x = event.clientX - (containerRect?.left ?? 0) - (blob.current?.clientWidth ?? 0) / 2;
            var y = event.clientY - (containerRect?.top ?? 0) - (blob.current?.clientHeight ?? 0) / 2;
            blob.current!.style.left = x + "px";
            blob.current!.style.top = y + "px";
        });
        
        card.current?.addEventListener("mouseleave", function (event) {
            blob.current!.style.display = "none";
        });
    }, [])

    return (
        <div ref={card} className="project-card">
            <div ref={blob} className="blob"></div>
            <h1 className='name'>Console Prettify</h1>
            <p>A simple tool for making a good looking UI in C/C++ console applications with little effort.</p>
        </div>
    );
}


export default ProjectSection