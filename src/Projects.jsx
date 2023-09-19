import React from 'react';
import useFetchProjects from './fetchProjects';
const Projects = () => {
  const { isLoading, projects } = useFetchProjects();
  return (
    <section className="projects">
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          projects.map((project, index) => {
            const { title, url, imageUrl } = project;
            return (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="project"
              >
                <img src={imageUrl} alt={title} className="img" />
                <h5>{title}</h5>
              </a>
            );
          })
        )}
      </div>
    </section>
  );
};

export default Projects;
