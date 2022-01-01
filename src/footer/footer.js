import React from 'react';
import './footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  '@fortawesome/fontawesome-free-regular'
import   '@fortawesome/free-solid-svg-icons'
import { faTwitterSquare,
    faLinkedinIn ,
    faGithubSquare,
    faStackOverflow ,
    faInstagram, faMailchimp,} from '@fortawesome/free-brands-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';


function footer() {

    
    return (
        <div className="bg-dark text-color-white footer_area">

                <div className="contact_container ">

                <div className="email_container"> 
                   <p className='email_text'>Say Hai</p> 
                   <p className="email"><a href='mailto:mjsuryavarma@gamil.com'>mjsuryavarma@gmail.com</a></p> 
                  </div>   
            <div className="footer_social_media ">
             <a href="https://www.linkedin.com/in/m-jithendra-suryavarma-9b245020a/" target="_blank" rel="social_media" className="footer_icons"><FontAwesomeIcon  icon={faLinkedinIn}/></a>
             <a href="https://github.com/mj-suryavarma" target="_blank" rel="social_media" className="footer_icons"><FontAwesomeIcon  icon={faGithubSquare}/></a>
             <a href="https://twitter.com/mj_suryavarma" target="_blank" rel="social_media" className="footer_icons"><FontAwesomeIcon  icon={faTwitterSquare}/></a>
             <a href="https://stackoverflow.com/users/16942358/suryavarma-mj" target="_blank" rel="social_media" className="footer_icons"><FontAwesomeIcon  icon={faStackOverflow}/></a>
             <a href="https://stackoverflow.com/users/16942358/suryavarma-mj" target="_blank" rel="social_media" className="footer_icons"><FontAwesomeIcon  icon={faInstagram}/></a>
            
            </div>
        </div>
        
    
    </div>

    )
}

export default footer
