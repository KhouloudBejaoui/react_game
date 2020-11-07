import React from 'react';
import classNames from 'classnames';

import './Footer.css';



export const  Footer = () => {

    return (
        //rodou responsive if u can o kaml estwiii
        <>
            <div class="fixed-footer">
                <i class="fa fa-user fa-10x left"><span className="score">score:</span></i>
                
                <i class="fa fa-user fa-10x right" ><span className="score">score:</span></i>  
                
                <div class="container"></div>   
                    
            </div>
        
        </>
    );
}
