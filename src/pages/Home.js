import React, { Component } from "react";
import { Link } from "react-router-dom";

import './styles/Home.css';
import planets from "../images/planets.jpg";

export default class Home extends Component {
    render(){
        return(
            <div className = "Home">
              <div className = "container-fluid">
                  
                        <img className = "hero-container"
                            src = { planets }
                            alt = "Planetas"
                            
                        />  
                
              </div>
            </div>
        )
    }
}