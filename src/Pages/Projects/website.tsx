import React from 'react';
import ProjBottom from '../../Components/projbottom';
import { Helmet } from 'react-helmet';

let projName = 'Personal Portfolio';

function Website () {
    return(
        <div>
            <Helmet><title>{projName}</title></Helmet>
            <div className="project-text">

                <h1>{projName}</h1>
                
                <p project-text="proj-language">HTML, CSS, Javascript</p>

                <div className='proj-divider'></div>
                
                <h2>Tools used:</h2>

                <p><strong>React:</strong> Frontend Framework</p>
                
                <p><strong>Typescript:</strong> Framework</p>
                
                <p><strong>react-bootstrap:</strong> Use Accordion, Carousel</p>
                
                <p><strong>react-particles-js:</strong> Background on the home screen</p>
                            
                <p><strong>virtual-scroll:</strong> Used to modify the scroll bar</p>

                <a href="https://github.com/nolzulfiu/personal-portfolio" target="_blank" rel="noopener noreferrer"
                >
                    View on Github
                </a>
            </div>
            
            <ProjBottom />
        </div>
    );
}

export default Website;