import React from 'react';
import Footer from '../Components/footer';
import ProjectList from '../Components/projectList';
import Particles from 'react-particles-js';

function Home () {



    return (
        <div>
            <p className="decription">Nol Zulfiu</p>
            <Particles
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