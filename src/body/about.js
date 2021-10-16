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
            
             <Card className="card about_container ">
            <div className="img_container">
             <CardImg src={myImage} 
             className="card-img myImage"
             alt="my image" ></CardImg>
             </div>
             <div className="card-text about_text ">Hi I'm M.Jithendra suryavarma.
             I'm from theni,tamilnadu,india.
             <br/>
             <div>
             I love coding and web web development 
             </div>
             <div>education: </div>
             <ul>
             <li className="card-text">govt higher secondary 
                 school</li>
                 <li>edx,udamy..etc online education</li>
               </ul>  
               <div>I can build a responsive front-end websites</div>
               </div>  
            </Card>
            

        </div>
    )
}

export default about
