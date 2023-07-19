import React from "react";
import ProjectCard from "../components/ProjectCard";
import { ProjectCards } from "../helpers/ProjectCards";

function Projects() {
    return (
      <div className="projects">
        <h2>My Projects</h2>
        <div className="project-cards">
          {ProjectCards.map((project, idx) => {
            return (
              <ProjectCard id={idx} name={project.name} image={project.image} />
            );
          })}
          
        </div>
      </div>
    )
  }
  
  export default Projects