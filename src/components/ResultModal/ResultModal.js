import React from 'react';
import classNames from 'classnames';

import './ResultModal.css';



export const  ResultModal = (props) => {
    const resultModalClasses = classNames({
        'modal-open': props.isGameOver //w9t toufa lo3ba chtjii resultat
    });

    //msg ly chytl3 ki game is over
    const message = props.winner ? `Winner is ${props.winner}.`: 'It is a tie'; 

    return (
        <div id="modal-overlay" className={resultModalClasses}>
            <div id="game-result-modal">
                <div id="result-container">
                    <div id="winner-container">
                        <span>{message}</span>
                    </div>
                </div>
                <div id="new-game-container">
                    <button 
                        id="new-game-button"
                        onClick={props.onNewGameClicked}>Start New Game</button>
                </div>
            </div>
        </div>
         
  );
}
