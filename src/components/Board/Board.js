import React from 'react';
import './Board.css';

import { Cell } from '../Cell/Cell';


export const  Board = (props) => {

    const cells = props.cellValues.map((value, index) => {
        const canHighLignt = props.winningCombination && 
                             props.winningCombination.indexOf(index) >= 0 ;

       return <Cell 
                key={index} 
                value={value} 
                canHighLignt= {canHighLignt} 
                onClick={() => props.cellClicked(index)} />
    });

  return (
    <div id="board">
        {cells}
    </div>
         
  );
}


