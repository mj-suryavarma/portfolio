import React from 'react';
import Skills from './skills';
import About from './about';
import Project from './projects/project';
import Ability from './ability/ability';
import './body.css'

function body() {
    return (
        <div className="full_body_container">
            <About className="body_about"/>
            <Skills className="body_skiil" />
             <Ability /> 
            <Project/>
        </div>
    )
}

export default body
