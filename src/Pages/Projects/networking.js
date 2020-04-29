import React from 'react';

function Networking () {
    return(
        <div className="project-text">
                    
            <p>Developed a multi-threading client-server system using Java that shows how a car park management system can keep track of the number of available spaces as cars leave and enter a multi-story car park. Wrote pseudocode and made flowcharts to gain an understanding of how the system would work before development.
            </p>
            <p>
            Implemented multithreading to ensure multiple clients could access the server at the same time. Added a concurrency method in the form of a locking mechanism to ensure that there were no concurrency errors.         
            </p>
            
            
            <a href="https://github.com/nolzulfiu/Car-Park" target="_blank" rel="noopener noreferrer">View on Github</a>

        </div>
    );
}

export default Networking;