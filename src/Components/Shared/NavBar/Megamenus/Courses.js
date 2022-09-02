import React from "react";
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import { PopularCourse,Courses } from "../data";
import {BsArrowRightCircleFill} from 'react-icons/bs' 

const Course = () =>{
return(
    <div className="About" >
        <div className="About-links">
            <h5><FormattedMessage id = 'About' defaultMessage = 'Categories'/>  </h5>
            <div className="Inner-link">
                {Courses.map((props) => {
                    return(
                        <Link  to= {props.to} className='menu-link'>
                            <div className="bg" style={{background: `${props.bg}`}}></div>
                            <div className="main">
                                <div className="class-contnier">
                                    <div className="icon" style={{content: `url(${props.icon})`}}></div>
                                </div>
                                <div className="block">
                                    <h5>{props.title}</h5>
                                    <p>{props.text}</p>
                                </div>
                            </div>
                          
                        </Link> 
                    )
                
                
                
                    })}
            </div>
        </div> 



     





    </div>
)

     

}




export default Course