import React from 'react';
import './footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  '@fortawesome/fontawesome-free-regular'
import   '@fortawesome/free-solid-svg-icons'
import { faTwitterSquare,faLinkedinIn ,faGithubSquare,faStackOverflow } from '@fortawesome/free-brands-svg-icons';


function footer() {

    
    return (
        <div className="bg-dark text-color-white footer_area">
                <p className="copy_rights">&copy; mjs@ 2021</p>
            <div className="container footer_social_media ">
             <a href="#" className="footer_icons"><FontAwesomeIcon  icon={faLinkedinIn}/></a>
             <a href="#" className="footer_icons"><FontAwesomeIcon  icon={faGithubSquare}/></a>
             <a href="#" className="footer_icons"><FontAwesomeIcon  icon={faTwitterSquare}/></a>
             <a href="#" className="footer_icons"><FontAwesomeIcon  icon={faStackOverflow}/></a>
            </div>
        </div>
    )
}

export default footer