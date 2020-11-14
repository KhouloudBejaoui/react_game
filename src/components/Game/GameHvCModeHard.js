import React, { useState } from 'react';
import './Game.css';
import {Link} from 'react-router-dom'
import { Footer } from '../Footer/Footer';

import { Board } from '../Board/Board';
import { ResultModal } from '../ResultModal/ResultModal';
import { CalculateWinner } from '../util/WinnerCalculator';


export const  GameHvCModeHard = () => {
    const [cellValues, setCellValues] = useState(['','','','','','','','','']);// kaabet les cellules par defaut bch ytnahawch mn blasthom
    const [xIsNext, setXIsNext] = useState(true);
    const [isGameOver, SetIsGameOver] = useState (false);
    const [numberOfTurnsLeft, SetNumberOfTurnsLeft] = useState(9);
    const [winner, setWinner] = useState();
    const [scoreX, setScoreX] = useState(0);
    const [scoreO, setScoreO] = useState(0);
    const [winningCombination, setWinningCombination] = useState([]); //lblasa mtaa winner
    const [availSpots, setAvailSpots] = useState([]); //lblasa mtaa winner


    function checkWin(board, player) {
        const winCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [6, 4, 2]
        ]
        
        let plays = board.reduce((a, e, i) =>
            (e === player) ? a.concat(i) : a, []);
        let gameWon = null;
        for (let [index, win] of winCombos.entries()) {
            if (win.every(elem => plays.indexOf(elem) > -1)) {
                gameWon = {index: index, player: player};
                break;
            }
        }
        return gameWon;
    }



    const minimax=(newBoard, player) =>{

        const availSpots=[]
        let j=0
        for (var i = 0; i < newBoard.length; i++) {
            if(newBoard[i]!=='X'&&newBoard[i]!=='O'){
                availSpots[j]=i;
                j++
            }
        }
        if (checkWin(newBoard, "X")) {
            return {score: -10};
        } else if (checkWin(newBoard, "O")) {
            return {score: 10};
        } else if (availSpots.length === 0) {
            return {score: 0};
        }
        var moves = [];
        for (var i = 0; i < availSpots.length; i++) {
            var move = {};
            move.index = newBoard[availSpots[i]];
            newBoard[availSpots[i]] = player;
    
            if (player === "O") {
                var result = minimax(newBoard, "X");
                move.score = result.score;
            } else {
                var result = minimax(newBoard, "O");
                move.score = result.score;
            }
    
            newBoard[availSpots[i]] = move.index;
    
            moves.push(move);
        }
    
        var bestMove;
        if(player === 'O') {
            var bestScore = -10000;
            for(var i = 0; i < moves.length; i++) {
                if (moves[i].score > bestScore) {
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        } else {
            var bestScore = 10000;
            for(var i = 0; i < moves.length; i++) {
                if (moves[i].score < bestScore) {
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        }
    
        return moves[bestMove];
    }
    

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

            newCellValues[cellIndex] ='X';
            let newNumberOfTurnsLeft = numberOfTurnsLeft - 1 ;
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
            const newCellValues2=[...newCellValues]
            for (var i = 0; i < newCellValues2.length; i++){
                if(newCellValues2[i]===''){
                    newCellValues2[i]=i
                    console.log("hi")
                }
            }
            console.log(newCellValues2)
            console.log(minimax(newCellValues2,'O'))

            newCellValues[minimax(newCellValues2,'O').index]='O';
            console.log(newCellValues)

            newNumberOfTurnsLeft = numberOfTurnsLeft - 1 ;

            //calculate the result
            calcResult = CalculateWinner(newCellValues, newNumberOfTurnsLeft, minimax(newCellValues2,'O').index);
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


