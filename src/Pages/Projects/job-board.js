import React from 'react';

function JobBoard () {
    return(
        <div className="project-text">

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
    );
}

export default JobBoard;