import React from 'react';
import {Link} from 'react-router-dom'
import boy from './boy.png';
import man from './man.png';
//import back from './back.png';

import './Home.css';

export const  Home = (props) => {

    return (
        <React.Fragment>

        <div >

            <h1 className=" homeh1 wow fadeInDown"data-wow-duration="2s" data-wow-delay=".5s" >Tic Tac Toe</h1>
            
            <Link to='/Human-VS-Humain' style={{ textDecoration: 'none' }}>
                <div id="new-game-container" className=" wow fadeInLeft"  data-wow-duration="3s" data-wow-delay=".5s">
                    <button id="new-game-button" style={{width:"150px"}}><i class="fa fa-user"></i> vs <i class="fa fa-user"></i></button>
                    
                </div>
            </Link>
            
            <Link to='/Human-VS-Computer' style={{ textDecoration: 'none' }}>
                <div id="new-game-container" className=" wow fadeInLeft"  data-wow-duration="3s" data-wow-delay=".6s">
                    <button id="new-game-button"style={{width:"150px"}}><i class="fa fa-user"></i> vs <i class="fa fa-robot"></i></button>
                </div>
            </Link>
            <Link to='/Instructions' style={{ textDecoration: 'none' }}>
                <div id="new-game-container"  className=" wow fadeInLeft"  data-wow-duration="3s" data-wow-delay=".7s">
                    <button id="new-game-button"style={{width:"150px"}}>Instructions</button>
                </div>
            </Link>
            
        </div>
        <img className="wow rotateIn" data-wow-duration="3s" data-wow-delay=".9s"src={man} width="300px"/>
        </React.Fragment>
  );
}
