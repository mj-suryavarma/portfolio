import React from 'react';
import Skills from './skills';
import About from './about';
import Project from './projects/project';
import './body.css'

function body() {
    return (
        <div className="full_body_container">
            <About className="body_about"/>
            <Skills className="body_skiil" />
            <Project/>
        </div>
    )
}

export default body
