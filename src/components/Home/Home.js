import React from 'react';
import {Link} from 'react-router-dom'


import './Home.css';

export const  Home = (props) => {

    return (
        <>
        <div>
           
            <h1>Tic Tac Toe</h1>
            <Link to='/Human-VS-Humain' style={{ textDecoration: 'none' }}>
                <div id="new-game-container">
                    <button id="new-game-button" style={{width:"100px"}}><i class="fa fa-user"></i> vs <i class="fa fa-user"></i></button>
                </div>
            </Link>
            <Link to='/Human-VS-Computer' style={{ textDecoration: 'none' }}>
                <div id="new-game-container">
                    <button id="new-game-button"style={{width:"100px"}}><i class="fa fa-user"></i> vs <i class="fa fa-robot"></i></button>
                </div>
            </Link>
            
        </div>
        </>
  );
}
