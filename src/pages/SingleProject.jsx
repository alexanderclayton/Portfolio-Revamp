import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectCards } from '../helpers/ProjectCards';

function SingleProject() {
    const { id } = useParams();
    const project = ProjectCards[id];

    const linkProject = () => {
        window.open(project.link)
    }
    return (
        <div className="project">
            <h2> {project.name} </h2>
            <img src={project.image} alt={project.alt} />
            <p> {project.description} </p>
            <p><strong>Skills:</strong> {project.skills}</p>
            <p className="project-link" onClick={linkProject}>Link to the project</p>
            <a href={project.github} id="github">Github Code</a>
        </div>
    );
}

export default SingleProject;