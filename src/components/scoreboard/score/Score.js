import React from 'react';
import './Score.scss';

function Score({score, playerOnMove}){
    return (
        <div className="Container-Score">

            <div className = {`Container-Score__Player ${playerOnMove === 'X' && 'Container-Score__Player--Highlighted'}`}>
                <div>X</div>
                <div>{ score.X === 0? '-': score.X }</div>
            </div>

            <div className = {`Container-Score__Player ${playerOnMove === 'O' && 'Container-Score__Player--Highlighted'}`}>
                <div>O</div>
                <div>{ score.O === 0? '-': score.O }</div>
            </div>

        </div>
    );
}
 
export default Score;