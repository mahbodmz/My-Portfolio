import React from 'react'
import './Projects.css'
import myProjects from '../Data/Projects.json'

const Projects = () => {
    return (
        <div className="projects-container">
            <h1 className="projects-title">My Projects</h1>
            <div className="projects-grid">
                {myProjects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="video-container">
                            <video
                                src={project.video}  
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="project-video"
                            />
                            <div className="project-overlay">
                                <div className="project-links">
                                    <a 
                                        href={project.github} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="github-link"
                                    >
                                        View Code
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="tech-stack">
                                {project.techStack.map((tech, techIndex) => (
                                    <span key={techIndex} className="tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects