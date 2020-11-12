import React, { useState } from 'react';
import './Game.css';
import {Link} from 'react-router-dom'
import { Footer } from '../Footer/Footer';

import { Board } from '../Board/Board';
import { ResultModal } from '../ResultModal/ResultModal';
import { CalculateWinner } from '../util/WinnerCalculator';


export const  Game = () => {
    const [cellValues, setCellValues] = useState(['','','','','','','','','']);// kaabet les cellules par defaut bch ytnahawch mn blasthom
    const [xIsNext, setXIsNext] = useState(true);
    const [isGameOver, SetIsGameOver] = useState (false);
    const [numberOfTurnsLeft, SetNumberOfTurnsLeft] = useState(9);
    const [winner, setWinner] = useState();
    const [scoreX, setScoreX] = useState(0);
    const [scoreO, setScoreO] = useState(0);
    const [winningCombination, setWinningCombination] = useState([]); //lblasa mtaa winner

    const isCellEmpty = (cellIndex) => cellValues[cellIndex] === ''; //bech t3awdch tbadel valeur t3 cell mara okhra

    const restartGame = () => {
        setCellValues(['','','','','','','','','']); 
        setXIsNext(true); 
        SetIsGameOver(false);
        SetNumberOfTurnsLeft(9);
        setWinner(undefined);
        setWinningCombination([]);
    }
    const handleScoreRestart=()=>{
        setScoreO(0)
        setScoreX(0)
    }
    const onCellClicked = (cellIndex) =>{
        if (isCellEmpty(cellIndex)) {
            const newCellValues = [...cellValues];
            newCellValues[cellIndex] = xIsNext ? 'X' : 'O';

            const newNumberOfTurnsLeft = numberOfTurnsLeft - 1 ;

            //calculate the result
            const calcResult = CalculateWinner(newCellValues, newNumberOfTurnsLeft, cellIndex);
            
            setCellValues(newCellValues); //yhot valeur f wst cell
            setXIsNext(!xIsNext); //bech yhot O
            SetIsGameOver(calcResult.hasResult);
            SetNumberOfTurnsLeft(newNumberOfTurnsLeft);
            setWinner(calcResult.winner);
            console.log(calcResult.winner)
            if(calcResult.winner==="X"){
                setScoreX(prevScoreX=>prevScoreX+1)
            }
            if(calcResult.winner==="O"){
                setScoreO(prevScoreO=>prevScoreO+1)
            }
            setWinningCombination(calcResult.winningCombination);//chtetlawn blast winner
        }
    };

  return (
    <>  
    {
        !isGameOver ?     
        <div style={{textAlign:"center",margin:"5px 0 50px 0"}}>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <div id="back-home-container" style={{display:"inline"}}>
                    <button 
                        id="new-game-button"
                        >Home Page
                    </button>
                </div>
                &emsp;
            </Link>
            <div id="back-home-container" style={{display:"inline"}}>
                <button 
                    id="new-game-button"
                    onClick={restartGame}>Restart
                </button>
            </div>
            &emsp;
            <div id="back-home-container" style={{display:"inline"}}>
                <button 
                    id="new-game-button"
                    onClick={handleScoreRestart}>Restart Score
                </button>
            </div>
        </div> :
        null
    }

        <div id="game">
            <h1>Tic Tac Toe</h1>
            <Board 
                cellValues = {cellValues} 
                winningCombination = {winningCombination} 
                cellClicked={onCellClicked} />
        </div>
        <ResultModal 
            isGameOver= {isGameOver} 
            winner = {winner} 
            onNewGameClicked = {restartGame}
            xIsNext={xIsNext} 
        />
        <Footer scoreO={scoreO} scoreX={scoreX} />
    </>
  );
}


