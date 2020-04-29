import React from 'react';

function Disso () {
    return(
        <div className="project-text">
            
            <p>Risk assessment algorithms are used in the US criminal justice system to score the likelihood (risk level) of the defendant reoffending. The scores are used throughout the sentencing process, from setting bail to deciding whether the defendant should be convicted or not. In this project I analysed the results of one of the leading risk assessment algorithms in the US called COMPAS and created my own Neural Network to compare results and racial bias levels.</p>
                
            <p style={{borderBottom: '2.5px solid #ffb000'}}>The analysis showed that African-Americans were affected the most by this. This project also explored how different factors such as marital status and the link between prior juvenile conviction and recidivism.</p>
            
            <p style={{marginTop: '20px'}}>Used SQL and VBA to extract and sort the data so that all redundant data was removed, all relevant fields in one table, and easily usable for the Neural Network.</p>
            
            <p>Used R to create a Neural Network of my own which had a much lower rate of false positives then the other Risk Assessment algorithm (Compas).</p>
            
            <a href="https://github.com/nolzulfiu/Racial-Bias-in-Risk-Assessment-Algorithms" target="_blank" rel="noopener noreferrer">View on Github</a>

        </div>
    );
}

export default Disso;