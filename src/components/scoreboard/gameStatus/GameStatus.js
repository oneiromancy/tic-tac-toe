import React from 'react';
import './GameStatus.scss';

function GameStatus({isGameover, playerOnMove}){
    return (
        <div className = 'Container-GameStatus__Message'>{isGameover? 'Game Over': `${playerOnMove} Turn`}</div>
    );
}
 
export default GameStatus;