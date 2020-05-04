import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Header from '../Components/header';
import Footer from '../Components/footer';
import Image from 'react-bootstrap/Image';

import Born from '../Photos/Born.jpg';
import Move from '../Photos/Move.jpg';
import Grad from '../Photos/Graduation.jpg';
import AXA from '../Photos/AXA.jpg';
import Uni from '../Photos/Uni-grad.jpg';
import Noli from '../Photos/Noli.jpg';
import Next from '../Photos/Next.jpg';


function About () {

    function makeObj(image, year, text, text2 = '') {
        return {
            image,
            year,
            text,
            text2
        };
    }
    
    const pages = [
        makeObj(Born, 1997, 'A little me was born in London'),
        makeObj(Move, 2007, 'Moved to Kosovo where I started highschool and made lifelong friends'),
        makeObj(Grad, 2014, 'I graduated Highschool!!!', 'Moved to London to study Computer Science at Brunel University'),
        makeObj(AXA, 2016, 'Joined AXA Investment Managers for my placement year as an Application Analyst'),
        makeObj(Uni, 2018, 'Graduated University!!', 'Joined Dillistone Systems as a 1st / 2nd Line Support Analyst'),
        makeObj(Noli, 2019, 'Moved to Malmo!!!', 'Joined Storvix to work on the Archimedes project as a Developer'),
        makeObj(Next, 2020, 'Who knows what the future will hold...')
    ];

    return(
        <div>
            <Carousel>
                {pages.map(page => {
                    return (
                        <Carousel.Item  style={{'height':"753px"}}>
                            <div className='section'>
                                <div className='about-photo-container'>
                                    <Image src={page.image} rounded />
                                </div>

                                <div className='about-container'>
                                    <div className='about-text'>
                                        <h1 className='about-years'>{page.year}</h1>
                                        <h2>{page.text}</h2>
                                        <h2>{page.text2}</h2>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>    
                    );
                })}
                <Carousel.Item style={{'height':"753px"}}>
                    <Footer />
                </Carousel.Item>
            </Carousel>
            <Header />
        </div>
    )
}

export default About;