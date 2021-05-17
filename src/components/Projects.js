import React from 'react';
import { Spring, useSpring } from 'react-spring';
import {Link} from 'react-router-dom';

function projects() {
    const removeUnderline = {

        textDecoration: 'none'
    }
    return( 
        <Spring
            from={{opacity: 0, marginTop: -50}}
            to={{opacity:1, marginTop: 0}}
            >
            { props => (
        <div style={props}>
        
            <div className='p3'>
                <table>
                    <th>Here are the links to my current classes</th>
                    <br/>
                    <br/>
                    <tr>
                        <a style={removeUnderline} href="https://lehman.smartcatalogiq.com/en/2015-2017/Undergraduate-Bulletin/Courses/CMP-Computer-Science/400/CMP-414">
                            CMP 414 Artificial Intelligence 
                        </a>
                            <br/>
                            <br/>
                        <a style={removeUnderline} href="https://lehman.smartcatalogiq.com/en/2019-2021/Graduate-Bulletin/Courses/CMP-Computer-Science/700/CMP-775">
                            CMP 775 Graphing Algotithm 
                        </a>
                            <br/>
                            <br/>
                        <a style={removeUnderline} href="https://lehman.smartcatalogiq.com/2017-2019/Graduate-Bulletin/Courses/CMP-Computer-Science/700/CMP-788">
                            CMP 485 Topics in Computer Science 
                        </a>
                            <br/>
                            <br/>
                        <a style={removeUnderline} href={"https://github.com/Ibrah00/hw3"}> 
                                
                        </a>  
                    </tr>
                </table>
                </div>
                
            <br/>
            
     
            <div className="p4">
                <table>
                <th>Here is the link to my github page</th>
                    <br/>
                    <br/>
                    <tr>
                        <a style={removeUnderline} href="https://github.com/ibrah08">
                            Github Page 
                        </a>
                    </tr>
                </table>
            </div>
        </div>
            )}
            </Spring>
        
    );
    
}

export default projects;