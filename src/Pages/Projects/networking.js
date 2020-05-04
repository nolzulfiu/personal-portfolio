import React from 'react';
import ProjBottom from '../../Components/projbottom';
import { Helmet } from 'react-helmet';

let projName = 'MultiThreading Client-Server System';

function Networking () {
    return(
        <div>
            <Helmet><title>{projName}</title></Helmet>
            <div className="project-text">
                
                <h1>{projName}</h1>

                <p project-text="proj-lang">Java</p>
                        
                <p>Developed a multi-threading client-server system using Java that shows how a car park management system can keep track of the number of available spaces as cars leave and enter a multi-story car park. Wrote pseudocode and made flowcharts to gain an understanding of how the system would work before development.
                </p>
                <p>
                Implemented multithreading to ensure multiple clients could access the server at the same time. Added a concurrency method in the form of a locking mechanism to ensure that there were no concurrency errors.         
                </p>
                
                
                <a href="https://github.com/nolzulfiu/Car-Park" target="_blank" rel="noopener noreferrer">View on Github</a>

            </div>
            
            <ProjBottom />
        </div>
    );
}

export default Networking;