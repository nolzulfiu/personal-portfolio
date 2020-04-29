import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Miscellaneous from '../Pages/Projects/miscellaneous';
import DocPlatform from '../Pages/Projects/DocPlatform';
import JobBoard from '../Pages/Projects/job-board';
import Website from '../Pages/Projects/website';
import Disso from '../Pages/Projects/disso';
import Networking from '../Pages/Projects/networking';
import ClientReport from '../Pages/Projects/client-report';

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
    makeObj('Miscellaneous', 'Various Languages', '', <Miscellaneous />),
    makeObj('DocPlatform', 'React, Babel, Bootstrap', 2020, <DocPlatform />),
    makeObj('Job Board', 'React, Node.js', 2020, <JobBoard />),
    makeObj('This Website', 'React, Bootstrap', 2020, <Website />),
    makeObj('Racial Bias in Risk Assesment Algorithms', 'R, VBA, SQL', 2018, <Disso />),
    makeObj('Network Computing Client-Server System', 'Java', 2018, <Networking />),
    makeObj('Client Reporting Macro', 'Visual C#, VBA', 2017, <ClientReport />)
  ];

  return (
    <div className="project-div">
      <h1 className="project-head">Projects</h1>
      <Accordion defaultActiveKey="-1">
        {projects.map(project => {
          return (
            <ul className="projects-list" key={project.ind}>
              <Card style={{marginRight: '10px', marginLeft: '10px', backgroundColor: '#000000'}}>
                <Accordion.Toggle as={Card.Header} eventKey={project.ind} className="projects-list-item">
                    <h2 className="proj-title">{project.title}</h2>
                    <br />
                    <span className='proj-lang'>{project.language}</span>
                    <span className="proj-year">{project.year}</span>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={project.ind}>
                  <Card.Body>{project.page}</Card.Body>
                </Accordion.Collapse>
              </Card>
            </ul>
          );
        })}
        </Accordion>
    </div>
  );
};

export default ProjectList;