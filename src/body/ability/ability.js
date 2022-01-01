import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  '@fortawesome/fontawesome-free-regular'
import   '@fortawesome/free-solid-svg-icons'
import { faMobileAlt, faRocket, faTools, faUsers } from '@fortawesome/free-solid-svg-icons';
import './ability.css'

function Ability() {
    return (
        <div className="ability_container container">
            <h2>Ability</h2>
            <div className="ability_icon_container">
            <div className="mob_frd_container">
                
                <div className="mob_frd_icon">
                <FontAwesomeIcon icon={faMobileAlt} className='ability_icon'/>
                </div>
                <div>
                    Mobile Friendly
                </div>
          </div>                
                
         <div className="full_func_container">
                <div className="full_func_icon">
                <FontAwesomeIcon icon={faRocket} className='ability_icon'/>
                </div>
                <div>
                    High Responsive
                </div>
                </div>                
                
                <div className="responsive_container">
                  <div className="responsive_icon">
                <FontAwesomeIcon icon={faTools} className='ability_icon'/>
                </div>
                <div>
                    Fully Functional
                </div>
                </div>               
                
                 <div className="user_frd_container">
                <div className="user_frd_icon">
                <FontAwesomeIcon icon={faUsers} className='ability_icon' />
                </div>
                <div>
                    User Friendly
                </div>
                </div> 
             </div> 
        </div>

    )
}

export default Ability
