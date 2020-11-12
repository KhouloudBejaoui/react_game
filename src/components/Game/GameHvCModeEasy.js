import React, { useState } from 'react';
import './Game.css';
import {Link} from 'react-router-dom'
import { Footer } from '../Footer/Footer';

import { Board } from '../Board/Board';
import { ResultModal } from '../ResultModal/ResultModal';
import { CalculateWinner } from '../util/WinnerCalculator';


export const  GameHvCModeEasy = () => {
    const [cellValues, setCellValues] = useState(['','','','','','','','','']);// kaabet les cellules par defaut bch ytnahawch mn blasthom
    const [xIsNext, setXIsNext] = useState(true);
    const [isGameOver, SetIsGameOver] = useState (false);
    const [numberOfTurnsLeft, SetNumberOfTurnsLeft] = useState(9);
    const [winner, setWinner] = useState();
    const [scoreX, setScoreX] = useState(0);
    const [scoreO, setScoreO] = useState(0);
    const [winningCombination, setWinningCombination] = useState([]); //lblasa mtaa winner

    const isCellEmpty = (cellIndex) => 
        cellValues[cellIndex] === ''; //bech t3awdch tbadel valeur t3 cell mara okhra

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
            console.log(cellIndex,"cellIndex")
            newCellValues[cellIndex] ='X';
            let newNumberOfTurnsLeft = numberOfTurnsLeft - 1 ;
            console.log(newNumberOfTurnsLeft)
            let calcResult = CalculateWinner(newCellValues, newNumberOfTurnsLeft, cellIndex);
                if(calcResult.hasResult){
                    setCellValues(newCellValues); //yhot valeur f wst cell
                    SetIsGameOver(calcResult.hasResult);
                    setWinner(calcResult.winner);
                    if(calcResult.winner==="X"){
                        setScoreX(prevScoreX=>prevScoreX+1)
                    }
                    if(calcResult.winner==="O"){
                        setScoreO(prevScoreO=>prevScoreO+1)
                    }
                    return
                }

            let ran=null;
            const x=cellIndex
            do{
                ran=Math.floor(Math.random() * 9); 
                cellIndex=ran
            }while(!isCellEmpty(cellIndex)|| cellIndex===x)
            console.log(cellIndex,"ran")
            newCellValues[cellIndex] ='O';
            console.log(newCellValues)
            newNumberOfTurnsLeft = numberOfTurnsLeft - 1 ;
            console.log(newNumberOfTurnsLeft,"hii")

            //calculate the result
            calcResult = CalculateWinner(newCellValues, newNumberOfTurnsLeft, cellIndex);
            if(calcResult.hasResult){
                setCellValues(newCellValues); //yhot valeur f wst cell
                SetIsGameOver(calcResult.hasResult);
                setWinner(calcResult.winner);
                if(calcResult.winner==="X"){
                    setScoreX(prevScoreX=>prevScoreX+1)
                }
                if(calcResult.winner==="O"){
                    setScoreO(prevScoreO=>prevScoreO+1)
                }
                return
            }
            if(newNumberOfTurnsLeft===5){
                setCellValues(newCellValues); //yhot valeur f wst cell
                setWinner(undefined);
                SetIsGameOver(true);
                return

            }
            setCellValues(newCellValues); //yhot valeur f wst cell
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
            </Link>
            <div id="back-home-container" style={{display:"inline"}}>
                <button 
                    id="new-game-button"
                    onClick={restartGame}>Restart
                </button>
            </div>
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
                xIsNext={xIsNext} 
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


