import React from "react";
import { projects } from "./constant";
import { Tilt } from "react-tilt";

function ProjectCard({name, description, tags, image, source_code_link }) {
    return (
        <Tilt className="project-card" >
            <img src={image} alt="project_image" className="project-image" />
            <div className="github_img">
                <a href={source_code_link}> <i class='bx bxl-github'></i> </a>
            </div>
            <div>
                <h3 className="project-name">{name}</h3>
                <p className="project-description">{description}</p>
            </div>
            <div className="project-tags">
                {tags.map((tag,index) => (
                    <p className={`${tag.color}`} key={index}>  #{tag.name}  </p>
                ))}
            </div>
        </Tilt>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="project_section" >
            <div className="project_content">
                <p className="heading-subtext">My work</p>
                <h2 className="heading">Projects</h2>
                <p className="discription">
                    Following projects showcases my skills and experience through real-world examples of my work. Each project is
                    briefly described with links to code repositories. It reflects my ability to solve complex
                    problems, work with different technologies, and manage projects effectively.
                </p>
            </div>
            <div className='projects-container'>
                {projects.map((project, index) => (
                    <ProjectCard key={`card-${index}`}  {...project} />
                ))}
            </div>
        </section>
    )
}