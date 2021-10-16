import React, { useState } from 'react';
import './heading.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  '@fortawesome/fontawesome-free-regular'
import   '@fortawesome/free-solid-svg-icons'
import { faTwitterSquare,faLinkedinIn ,faGithubSquare,faStackOverflow } from '@fortawesome/free-brands-svg-icons';
// import {Collapse} from 'react-collapse';
import {Collapse } from 'reactstrap';


function Heading() {


    return (
        <div className="heading-container">
            <div>
               <div className ="social-media-container">
                  <a href="https://www.linkedin.com/in/m-jithendra-suryavarma-9b245020a/" rel="social_media" target="_blank" className="social_media"><FontAwesomeIcon className="sm_linkedin" icon={faLinkedinIn} /></a>
                  <a href="https://github.com/mj-suryavarma" rel="social_media" target="_blank" className="social_media"><FontAwesomeIcon className=" sm_github" icon={faGithubSquare} /> </a>
                   <a href="https://twitter.com/mj_suryavarma" rel="social_media" target="_blank" className="social_media" ><FontAwesomeIcon className="sm_twitter" icon={faTwitterSquare} /></a>
                   <a href="https://stackoverflow.com/users/16942358/suryavarma-mj" rel="social_media" target="_blank" className="social_media"><FontAwesomeIcon className="sm_stackoverflow" icon={faStackOverflow} /></a>
                </div> 
               <div className="greeting-container">
                <div className="greeting-content" >
                    
                   <div className="greeting-message">"Welcome to those who believe in the power of dreams and who would like to join me in my exploration of life."
</div>
                    <div className="greeting-author">- Bertrand Piccard.</div>
                    <div className="greeting_declare_work">I'm a creative front-end developer and a freelancer.</div>
                    
                    </div>
                   </div> 
                <div className="dot-containers" >
                     
                <div className="dot dot-1"></div>
                   <div className="dot dot-2"></div>
                   <div className="dot dot-3"></div>
                   <div className="dot dot-4"></div>
                   <div className="dot dot-5"></div>
                   <div className="dot dot-6"></div>
                   <div className="dot dot-7"></div>
                   <div className="dot dot-8"></div>
                   <div className="dot dot-9"></div>
                   <div className="dot dot-10"></div>
                   <div className="dot dot-11"></div>
                   <div className="dot dot-12"></div>
 

                    
                </div>
            </div>
        </div>
    )
}

export default Heading;
