import React from 'react';
import ProjBottom from '../../Components/projbottom';

function JobBoard () {
    return(
        <div>
            <div className="project-text">
            
            <h1>Job Board</h1>
            
            <p project-text="proj-lang">React, Node.js</p>

            <p>Created a Job Board which displays Developer jobs in Skåne. It pulls data through an API from Arbetsformedlingen (Swedish Employment Agency)</p>

            <h2>Frontend:</h2>

            <p><strong>Framework:</strong> React</p>

            <p><strong>UI:</strong> Material UI</p>

            <h2>Backend:</h2>

            <p><strong>Framework:</strong> Node.js</p>

            <p><strong>DB:</strong> Redis</p>
                        
            <p><strong>API Scheduling:</strong> Cron</p>


            <a href="https://github.com/nolzulfiu/Job-Board" target="_blank" rel="noopener noreferrer">View on Github</a>

            </div>
            
            <ProjBottom />
        </div>
    );
}

export default JobBoard;