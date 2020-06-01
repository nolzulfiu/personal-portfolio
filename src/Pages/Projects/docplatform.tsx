import React from 'react';
import ProjBottom from '../../Components/projbottom';
import { Helmet } from 'react-helmet';

let projName = 'DocPlatform';

function DocPlatform () {
    return(
        <div>
            <Helmet><title>{projName}</title></Helmet>
            <div className="project-text">
            
                <h1>{projName}</h1>
                
                <p className="proj-lang">React, Babel, Bootstrap</p>

                <p>Platform where you can create papers, save them, and export them as PDF</p>
                
                <h2>Backend:</h2>

                <p><strong>Cross Domain Requests:</strong> CORS</p>

                <p><strong>File Upload:</strong> Multer</p>

                <p><strong>ORM:</strong> Sequelize</p>

                <p><strong>Database:</strong> SQLite3</p>

                <div style={{borderBottom: '2.5px solid #ffb000', width: '100%'}}></div>

                <h2>Frontend:</h2>

                <p><strong>Framework:</strong> React</p>

                <p><strong>UI:</strong> Bootstrap</p>
                            
                <p><strong>Form Handling Function:</strong> Formik</p>
                            
                <p><strong>Text Editor:</strong> CKEditor</p>
                
                <p><strong>Object Schema Validation:</strong> Yup</p>

                <a href="https://github.com/nolzulfiu/DocPlatform" target="_blank" rel="noopener noreferrer">View on Github</a>

            </div>
            
            <ProjBottom />
        </div>
    );
}

export default DocPlatform;