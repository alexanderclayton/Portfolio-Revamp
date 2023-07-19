import React from 'react';
import { useNavigate } from "react-router-dom";

function ProjectCard({ image, name, id }) {
  const navigate = useNavigate();
  return (
    <div className="project-card" onClick={() => { navigate('/project/' + id)}}>
        <div style={{backgroundImage: `url(${image})`}} className="background-image" />
        <h2> {name} </h2>
    </div>
  )
}

export default ProjectCard