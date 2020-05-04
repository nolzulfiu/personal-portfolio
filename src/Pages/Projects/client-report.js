import React from 'react';
import ProjBottom from '../../Components/projbottom';

function ClientReport () {
    return(
        <div>
            <div className="project-text">
            
                <h1>Client Reporting Macro</h1>
                
                <p project-text="proj-lang">C#, VBA</p>

                <p>At AXA Investment Managers I redeveloped a Client Reporting Macro from VBA to Visual C#. During this project I was able to decrease the amount of lines of code from 4000+ to 1000 and to bring down the run time from 30 seconds to just 6 seconds. 
                </p>
                
                <p>Revamped all the financial calculations in the report to speed up the runtime and optimize the workflow.</p>
                
                <p>Set up meetings with all the users (portfolio managers, investment teams) to find out what they needed in the program, what they wanted to add, and then come up with a plan & timeline.</p>

            </div>
            
                
            <ProjBottom />
        </div>
    );
}

export default ClientReport;