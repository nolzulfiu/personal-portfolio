import React from 'react';
import { Link } from "react-router-dom";
import LogoLight from '../Photos/logo-light.svg';
import LogoDark from '../Photos/logo-dark.svg';

function Header () {

    return(
        <div style={{zIndex: 999}}>
            <Link className="home-button" to='/'>
                <img
                    src={LogoLight}
                    onMouseOver={e => (e.currentTarget.src = LogoDark)}
                    onMouseOut={e => (e.currentTarget.src = LogoLight)}
                />
            </Link>

            <Link className="about-button" to='/about'>
                <strong><p className="about">ABOUT</p></strong>
            </Link>
        </div>
    );
}
  
export default Header;

