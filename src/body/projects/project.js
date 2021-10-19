import React from 'react';
import './project.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsImage from '../projectImg/readNews.jpeg';
import weatherImage from '../projectImg/weather.jpeg';
import MoviePopCorn from '../projectImg/popcorn-movie.jpg';


function project() {
     
    return (
        <div className="container mt-3 project_area ">
            <h2 className="project_heading">Projects</h2>
            <div className="project_container container x-2">
                <div className="news_project project">
                    <a href="https://mj-web-news.netlify.app/" target="_blank" rel="noreferrer" className="project_link" >
                        <img src={NewsImage} className="project_image"/>
                    </a>
                    <div className="text-block">
                        <a href="https://mj-web-news.netlify.app/" target="_blank" className="project_text_link" rel="noreferrer">
                         <h3 className="project_text_align">News App</h3>
                   <h3> Read short news </h3>
                   </a>

                    </div>
                </div>
                <div className="weather_project project">
                    <a href="https://mj-weather-app.netlify.app/" rel="norefferrer" target="_blank" className="project_link">
                        <img src={weatherImage} className="project_image"/>
                    </a>
                    <div className="text-block">
                        <a href="https://mj-weather-app.netlify.app/" rel="norefferrer" target="_blank" className="project_text_link" rel="noreferrer">
                         <h3 className="project_text_align">Simple Weather App</h3>
                   <h3>View your Location</h3>
                   </a>

                    </div>
                    
                    </div>
                <div className="imdb_project project">
                    <a href="https://mj-movie-data.netlify.app/" rel="norefferrer" target="_blank"  className="project_link">
                        <img src={MoviePopCorn} className="project_image"/>
                    </a>
                    <div className="text-block">
                        <a href="https://mj-movie-data.netlify.app/" rel="norefferrer" target="_blank"  className="project_text_link" rel="noreferrer">
                         <h3 className="project_text_align">Imdb App</h3>
                   <h3>Movie Data App</h3>
                   </a>

                    </div>
                    
                    </div> 
            </div>

        </div>
    )
}

export default project
