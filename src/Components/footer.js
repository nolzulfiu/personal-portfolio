import React from 'react';

const Footer = () => (
    <div>
        <link rel="stylesheet" href="../App.css" />
        <div className="contact">
            <h2>Sound Interesting?</h2>
            <h4 style={{animation: 'pulse', animationDuration: '1.5s', animationIterationCount: 'infinite'}}>
                <a href="mailto:nol.zulfiu@gmail.com" title="nol.zulfiu@gmail.com" className='email'>Email me!</a>
            </h4>
        </div>

        <div className='footLine'></div>
    
        <div className="contact-links">
            <a href="https://github.com/nolzulfiu" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://www.linkedin.com/in/nolzulfiu/" target="_blank" rel="noopener noreferrer">Linkedin</a>
        </div>
    </div>
  );
  
export default Footer;