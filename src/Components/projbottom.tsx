import React from 'react';
import { Link } from "react-router-dom";
import Footer from './footer';

const projects = ['/miscellaneous', '/docplatform', '/jobboard', '/website', '/disso', '/networking', '/clientreport'];

const ProjBottom = () => {

        let findInd = (val : any) => (val === window.location.pathname) ? val : null;

        function nextProject () {
            
            let x = projects.findIndex(findInd);

            return (x === projects.length - 1) ? projects[0] : projects[x + 1];
        };

        function prevProject ()  {
            
            let x = projects.findIndex(findInd);
            
            return (x === 0) ? projects[projects.length - 1] : projects[x - 1];
        };

        return (
            <div>
                <div className="prev-next">
                    <Link className="previous" to={prevProject}>
                        <h1>Previous Project</h1>
                    </Link>
                    
                    <Link className="next" to={nextProject}>
                        <h1>Next Project</h1>
                    </Link>        
                </div>


                <div className='clearfix'></div>

                <Footer />
            </div>
        );
}

export default ProjBottom;