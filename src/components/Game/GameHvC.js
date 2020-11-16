import React from 'react';
import {Link} from 'react-router-dom'

import '../Home/Home.css';

export const  GameHvC = (props) => {

    return (
        <>
        <div>
           
            <h1>Choose Mode</h1>
            <Link to='/Human-VS-Computer-Easy' style={{ textDecoration: 'none' }}>
                <div id="new-game-container">
                    <button id="new-game-button" style={{width:"150px"}}>Easy</button>
                </div>
            </Link>
            <Link to='/Human-VS-Computer-Hard' style={{ textDecoration: 'none' }}>
                <div id="new-game-container">
                    <button id="new-game-button"style={{width:"150px"}}>Hard</button>
                </div>
            </Link>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <div id="new-game-container" >
                    <button id="new-game-button"style={{width:"150px"}}><i class="fas fa-long-arrow-left"></i> Go back</button>
                </div>
            </Link>
            
        </div>
        </>
  );
}
