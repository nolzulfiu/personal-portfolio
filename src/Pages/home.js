import React from 'react';
import Footer from '../Components/footer';
import ProjectList from '../Components/projectList';
import Particles from 'react-particles-js';
import Typed from 'react-typed';
import { Helmet } from 'react-helmet';

function Home () {

    return (
        <div>
            <Helmet><title>Nol Zulfiu</title></Helmet>

            <Typed
                strings={['Hello', 'Hi There']}
                typeSpeed={60}
                backSpeed={60}
                smartBackspace={true}
                showCursor ={false}
                className='description'
                style={{fontFamily: 'Permanent Marker, cursive'}}
            />
            
            <Particles
            style={{minHeight: '700px'}}
            params={{
                "particles": {
                    "number": {
                        "value": 50
                    },
                    "size": {
                        "value": 3
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    }
                }
            }} />

            <ProjectList />
            <Footer />
      </div>
    )
}

export default Home;