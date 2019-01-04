import React from 'react';

import './Gameboard.scss';

import Square from './square/Square';

function Gameboard({gameboard, handleMoveAttempt}){
    return ( 
        <div className = 'Container-Gameboard'>
            {
                gameboard.map((symbol, index) => {
                    return(
                        <Square 
                            key = {index}
                            boardPos = {index}
                            symbol = {symbol}
                            handleMoveAttempt = {handleMoveAttempt}
                            
                        />
                    )
                })
            }
        </div>
    );
}
 
export default Gameboard;