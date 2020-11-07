import React from 'react';
import classNames from 'classnames';

import './Footer.css';



export const  Footer = (props) => {

    return (
        //rodou responsive if u can o kaml estwiii
        <>
            <div class="fixed-footer">
            <i class="fa fa-user fa-10x left"><span className="score">X: {props.scoreX}</span></i>
                
            <i class="fa fa-user fa-10x right" ><span className="score">O: {props.scoreO}</span></i>  
                                    
            </div>
        
        </>
    );
}
