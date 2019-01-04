import React from 'react';

import './Gameplay.scss';

import Gameboard from './gameboard/Gameboard';
import Gameover from './gameover/Gameover';

function Gameplay({playerOnMove, gameboard, isGameover, handleMoveAttempt, isDraw}){
    return (
        <div className = 'Container-Gameplay'>
            {
                !isGameover ?

                    <Gameboard 
                        gameboard = {gameboard}
                        handleMoveAttempt = {handleMoveAttempt} 
                    /> :
                    
                    <Gameover playerOnMove = {playerOnMove} isDraw = {isDraw} />
            }
        </div>
    );
}
 
export default Gameplay;