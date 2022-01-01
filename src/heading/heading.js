import React, { useState } from 'react';
import './heading.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  '@fortawesome/fontawesome-free-regular'
import   '@fortawesome/free-solid-svg-icons'
import { faTwitterSquare,faLinkedinIn ,faGithubSquare,faStackOverflow,faInstagram,faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
// import {Collapse} from 'react-collapse';
import {Collapse } from 'reactstrap';
import msjImage from './msj.jpg';


function Heading() {
  const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="heading-container">
            <div>
               <div className='social-media-container'>
                   <div className ="social-media-control" style={!isOpen ?{display:'none',transitionDuration:'2s' } : {display:'flex',transitionDuration:'2s'}} >

                  <a href="https://www.linkedin.com/in/m-jithendra-suryavarma-9b245020a/" rel="social_media" target="_blank" className="social_media"><FontAwesomeIcon className="sm_linkedin" icon={faLinkedinIn} /></a>
                  <a href="https://github.com/mj-suryavarma" rel="social_media" target="_blank" className="social_media"><FontAwesomeIcon className=" sm_github" icon={faGithubSquare} /> </a>
                   <a href="https://twitter.com/mj_suryavarma" rel="social_media" target="_blank" className="social_media" ><FontAwesomeIcon className="sm_twitter" icon={faTwitterSquare} /></a>
                   <a href="https://stackoverflow.com/users/16942358/suryavarma-mj" rel="social_media" target="_blank" className="social_media"><FontAwesomeIcon className="sm_stackoverflow" icon={faStackOverflow} /></a>
                   <a href="https://www.instagram.com/mj_suryavarma/" target="_blank" rel="social_media" className='social_media'>
                       <FontAwesomeIcon icon={faInstagram} className='sm_instagram' />
                   </a>
                   </div>
                   <img src={msjImage} alt="msj images" className="msjImage" 
                   onClick={()=>setIsOpen(!isOpen)} /> 
                </div> 
               <div className="greeting-container">
                <div className="greeting-content" >
                     <h5>I'm suryavarma jithendra</h5>
                   <div className="greeting-message">"Welcome to those who believe in the power of dreams and who would like to join me in my exploration of life."
</div>
                    <div className="greeting-author">- Bertrand Piccard.</div>
                    <div className="greeting_declare_work">I'm a creative web developer and a freelancer.</div>
                    
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
