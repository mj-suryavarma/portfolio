import React from 'react';
import { Card,CardImg,
    CardColumns } from 'react-bootstrap';
import { Progress } from 'reactstrap';
import myImage from './mjsuryavarma.jpg'
import './about.css'


function about() {
    return (
        <div className="container " >
            <h2 className="about_heading ">About</h2>
            
             <Card className="card about_container bg-dark">
            <div className="img_container">
             <CardImg src={myImage} 
             className="card-img myImage"
             alt="my image" ></CardImg>
             </div>
             <div className="card-text about_text ">Hi I'm Jithendra suryavarma.
             I'm from theni,tamilnadu,india.I love coding and web web development 
             <div>education: </div>
             <ul>
             <li className="card-text">govt higher secondary 
                 school</li>
                 <li>edx,udamy..etc online education</li>
               </ul>  
               </div>  
            </Card>
            

        </div>
    )
}

export default about
