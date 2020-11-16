import React from 'react';

import {Link} from 'react-router-dom'




export const  Instructions = (props) => {

    return (
        <>
        <div id ="game" className="inst">
            <h1>Rules</h1>
            
                <ul>
                    <li className=" wow fadeInLeft"  data-wow-duration="3s" data-wow-delay=".5s"> 1. The game is played on a grid that's 3 squares by 3 squares.</li> 

                    <li className=" wow fadeInRight"  data-wow-duration="3s" data-wow-delay=".6s"> 2. You are <span className="st">X</span>, your friend or the computer is <span className="st">O</span>. Players take turns putting their marks in empty squares.</li> 

                    <li className="wow fadeInLeft"  data-wow-duration="3s" data-wow-delay=".7s"> 3. The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.</li> 

                    <li className=" wow fadeInRight"  data-wow-duration="3s" data-wow-delay=".8s">4. When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.</li> 
                </ul>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <div id="new-game-container" className=" wow fadeInLeft"  data-wow-duration="3s" data-wow-delay=".6s">
                        <button id="new-game-button"style={{width:"150px"}}>Let's play</button>
                    </div>
                </Link>
        </div>
        </>
  );
}

