import React from 'react';
import { Link } from "react-router-dom";

function Header () {

    return(
        <div style={{zIndex: 999}}>
            <Link className="home-button" to='/'>
                <strong><p className="home">HOME</p></strong>
            </Link>

            <Link className="about-button" to='/about'>
                <strong><p className="about">ABOUT</p></strong>
            </Link>
        </div>
    );
}
  
export default Header;

