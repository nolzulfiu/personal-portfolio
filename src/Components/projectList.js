import React from 'react';
import { Link } from "react-router-dom";

const ProjectList = () => {

  let i = 0;

  function makeObj(title, language, year, page, ind = i++) {
    return {
      title,
      language,
      year,
      page,
      ind
    };
  }

  const projects = [
    makeObj('Miscellaneous', 'Various Languages', '', 'miscellaneous'),
    makeObj('DocPlatform', 'React, Babel, Bootstrap', 2020, 'docplatform'),
    makeObj('Job Board', 'React, Node.js', 2020, 'jobboard'),
    makeObj('Personal Portfolio', 'React, Bootstrap', 2020, 'website'),
    makeObj('Racial Bias in Risk Assesment Algorithms', 'R, VBA, SQL', 2018, 'disso'),
    makeObj('MultiThreading Client-Server System', 'Java', 2018, 'networking'),
    makeObj('Client Reporting Program', 'Visual C#, VBA', 2017, 'clientreport')
  ];

  let mainTitle = 'Nol Zulfiu';

  return (
    <div>
      <h1 className="project-head">Projects</h1>
        {projects.map(project => {
          return (
              <Link className="projects-list" key={project.ind} to={'/' + project.page}>
                <div className='projects-list-item'>
                  <h2 className="proj-title">{project.title}</h2>
                  <br />
                  <span className='proj-lang'>{project.language}</span>
                  <span className="proj-year">{project.year}</span>
                </div>
              </Link>
          );
        })}
    </div>
  );
};

export default ProjectList;


