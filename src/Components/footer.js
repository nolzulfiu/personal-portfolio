import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
            
            <a href="https://github.com/nolzulfiu" target="_blank" rel="noopener noreferrer" title='GitHub'>
                <FontAwesomeIcon icon={faGithub} size='lg' className='github' />
            </a>

            <a href="https://www.linkedin.com/in/nolzulfiu/" target="_blank" rel="noopener noreferrer" title='LinkedIn'>
                <FontAwesomeIcon icon={faLinkedin} size='lg' className='linkedin' />
            </a>
        </div>
    </div>
  );

export default Footer;