import React from 'react';

import './Gameover.scss';

function Gameover({playerOnMove, isDraw}){
    return (
        <div className = 'Container-Gameover'>
            <div className = 'Container-Gameover__WinnerAnnouncement'>{isDraw? 'OX': playerOnMove}</div>
            <div className = 'Container-Gameover__Message'>{isDraw? 'Draw!': 'Winner!'}</div>
        </div>
    );
}
 
export default Gameover;