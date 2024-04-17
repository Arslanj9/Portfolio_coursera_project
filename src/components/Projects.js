import React from 'react';
import './Projects.css'; 

const Projects = ({ id }) => {

  // Sample data for featured projects
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "https://via.placeholder.com/300",
      link: "#",
    },
    {
      id: 2,
      title: "Project 2",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "https://via.placeholder.com/300",
      link: "#",
    },
    {
      id: 3,
      title: "Project 3",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageUrl: "https://via.placeholder.com/300",
      link: "#",
    },
    {
      id: 4,
      title: "Project 4",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageUrl: "https://via.placeholder.com/300",
      link: "#",
    },
  ];

  return (
    <section id={id} className="featured-projects">
      <div className="projects-container">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <img src={project.imageUrl} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
