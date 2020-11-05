import React from 'react';
import classNames from 'classnames';//npm install classnames

import './Cell.css';

export const  Cell = (props) => {

    const cellClasses = classNames({
        cell: true, //css du cell (className)
        winner: props.canHighLignt // css class tbadel loun les cellules mtaa winner
    });

    const cellContentClasses = classNames({
        'cell-content': true, //css du contenu du cell (className)
        populated: props.value // css class tbaynelna lktiba f wost cell
    });

  return (
    <button className={cellClasses} onClick={props.onClick} >
        <span className={cellContentClasses}>{props.value}</span>
    </button>
  );
}


