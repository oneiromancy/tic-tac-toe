import React from 'react';

import './Square.scss';

function Square({symbol, handleMoveAttempt, boardPos}){
    return ( 
        <div className = {`Container-Gameboard__Square Gameboard__Square--colour${symbol}`} onClick = {() => {handleMoveAttempt(boardPos)}}>
            {symbol}
        </div>
    );
}
 
export default Square;