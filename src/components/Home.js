import React from 'react';
import { Spring, useSpring } from 'react-spring';
import night from './night.jpg';
import coolbackground from './cool-background.png';


function home() {
  return (
    <Spring
      from={{opacity: 0, marginTop: -50}}
      to={{opacity:1, marginTop: 0}}
      >
      {props => (
          <div style={props} id ="body1">
                <div className='zoom'>
                  <img src={night} alt="image1" class="image1"></img>
                </div>
                  <h2 style={props} className="intro">
                  <h1 class="Welcome"> Welcome to my personal page </h1>
                    My name is Ibrahem Abdul and this is my personal page. 

                  </h2>
          </div>
          )}
    </Spring>
    
  );
}

export default home;
