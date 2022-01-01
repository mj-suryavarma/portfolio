import React from 'react';
import Project from './projects/project';
import Ability from './ability/ability';
import './body.css'

function body() {
    return (
        <div className="full_body_container"> 
            <Project/>
             <Ability /> 
        </div>
    )
}

export default body
