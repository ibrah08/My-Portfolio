import React from 'react';
import {Link} from 'react-router-dom';
import { Spring, useSpring } from 'react-spring';

function navigation(){
    const removeUnderline = {

        textDecoration: 'none'
    };
   

    return(
        <nav className="nav">
            <h2>My Portfolio</h2>
            <ul className="inner">
                <Link to="/" style={removeUnderline}>
                    <li>Home</li>
                </Link>
                <Link to="/about" style={removeUnderline}>
                    <li>About Me</li>
                </Link>
                <Link to="/projects" style={removeUnderline}>
                    <li>My Projects</li>
                </Link>
                <Link to="/contactMe" style={removeUnderline}>
                    <li>Contact Me</li>
                </Link>
            </ul>
        </nav>
    );
}

export default navigation;
