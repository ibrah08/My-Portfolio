import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Spring, useSpring } from 'react-spring';

function about(){
    return(
        <Spring
            from={{opacity: 0, marginTop: -50}}
            to={{opacity:1, marginTop: 0}}
            >
            { props => (
                <div style={props}>
                    <div className='p1'>
                        <h1>About Me</h1> 
                            <p className='inner-p'> My name is Ibrahem Abdul and I am a student at Lehman College of the City
                                University of New York. I am graduating in May 2021 and will recieve my Bachelor's Degree in Science. 
                                Alongside programming I have intrest in netowking and server administration in the IT field. I hope to 
                                use my knowledge from the classroom and apply it to the workfield after
                                
                            </p> 
                         
                    </div>
                    <div className='p2'>
                        <h1>Languages</h1> 
                        <p>
                            HTML
                            CSS
                            Java
                            Javacript
                            react
                        </p>
                    </div>

                    
                    
                </div>
            )}
        </Spring>

    );
}

export default about;