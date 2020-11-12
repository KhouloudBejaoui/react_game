import React from 'react';
import './Board.css';

import { Cell } from '../Cell/Cell';


export const  Board = (props) => {

    const cells = props.cellValues.map((value, index) => {
        const canHighLignt = props.winningCombination && 
                             props.winningCombination.indexOf(index) >= 0 ;

       return <Cell 
                id={index}
                key={index} 
                value={value} 
                xIsNext={props.xIsNext} 
                canHighLignt= {canHighLignt} 
                onClick={() => props.cellClicked(index)} />
    });

  return (
    <div id="board">
        {cells}
    </div>
         
  );
}


