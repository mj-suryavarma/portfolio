import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  '@fortawesome/fontawesome-free-regular'
import   '@fortawesome/free-solid-svg-icons'
import { faHtml5 , faCss3 , faBootstrap , faReact, faJsSquare} from '@fortawesome/free-brands-svg-icons';
import './skills.css';

// import 'bootstrap/dist/css'



function skills() {
    return (  
        <div className=" container skill-container mt-4"> 

        <h2 className="skill_heading ">Skills</h2>  
           <div className="align_container">
             
            <div className="progress_container mt-1 ">
              <div className="progress_bar pb_html">
                <div className="progress_effect pf_html" 
                  style={{width:'90%'}}>
              <div>HTML</div>
              <div>90%</div>
                </div>
              </div>

              <div className="progress_bar pb_css">
                <div className="progress_effect pf_css" 
                  style={{width:'87%'}}>
              <div>CSS</div>
              <div>87%</div>
                </div>
              </div>
              <div className="progress_bar pb_javascript">
                <div className="progress_effect pf_javascript" 
                  style={{width:'85%'}}>
              <div>JAVASCRIPT</div>
              <div>85%</div>
                </div>
              </div>
              <div className="progress_bar pb_react">
                <div className="progress_effect pf_react" 
                  style={{width:'82%'}}>
              <div>REACT JS</div>
              <div>82%</div>
                </div>
              </div>
              <div className="progress_bar pb_bootstrap">
                <div className="progress_effect pf_bootstrap" 
                  style={{width:'76%'}}>
              <div>BOOTSTRAP</div>
              <div>76%</div>
                </div>
              </div>
             </div> 


              <div className="skill_icon_container">

                <div className="skill_icons mt-4"> 
                
            <FontAwesomeIcon  icon={faHtml5} className="html_icon"/>
            <FontAwesomeIcon  icon={faCss3} className="css_icon"/>
            <FontAwesomeIcon  icon={faJsSquare} className="js_icon"/>
            <FontAwesomeIcon  icon={faReact} className="react_icon"/>
            <FontAwesomeIcon  icon={faBootstrap} className="bootstrap_icon"/>
                </div >
            </div>
              

            </div>
         </div>      
 )
}

export default skills
