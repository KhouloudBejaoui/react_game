import React, { useState } from 'react';
import './Game.css';

import { Board } from '../Board/Board';
import { ResultModal } from '../ResultModal/ResultModal';
import { CalculateWinner } from '../util/WinnerCalculator';


export const  Game = () => {
    const [cellValues, setCellValues] = useState(['','','','','','','','','']);// kaabet les cellules par defaut bch ytnahawch mn blasthom
    const [xIsNext, setXIsNext] = useState(true);
    const [isGameOver, SetIsGameOver] = useState (false);
    const [numberOfTurnsLeft, SetNumberOfTurnsLeft] = useState(9);
    const [winner, setWinner] = useState();
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
            setWinningCombination(calcResult.winningCombination);//chtetlawn blast winner
        }
    };

  return (
    <>
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
            onNewGameClicked = {restartGame} />

    </>
  );
}


