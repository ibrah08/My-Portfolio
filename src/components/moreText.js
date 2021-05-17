import React from 'react';
import { Spring, useSpring } from 'react-spring';
function moreText(){
    return(
        <Spring
            from={{opacity: 0, }}
            to={{opacity:1, }}
            >
            {props => (
                <div style={props}>
                    <div className='p2'>
                        <h1>Future Goals</h1> 
                            <p> As I graduate I want to expand my knowledge on not just coding but many things outside
                                of just work and technology. I beilve a good foundation in life is to have a well rounded understanding 
                                of a little bit of everything.
                            </p>  
                    </div>
                </div>
            )}
        </Spring>

);


}

export default moreText;

