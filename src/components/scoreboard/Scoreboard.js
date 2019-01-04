import React from 'react';

import './Scoreboard.scss';

import Score from './score/Score';
import GameStatus from './gameStatus/GameStatus';

function Scoreboard({score, playerOnMove, isGameover}){
    return (
        <div className = 'Container-Scoreboard'>
            <Score score = {score} playerOnMove = {playerOnMove}/>
            <GameStatus isGameover = {isGameover} playerOnMove = {playerOnMove}/>
        </div>
    );
}
 
export default Scoreboard;