import React from 'react';

import './RestartBtn.scss';

function RestartBtn({handleGameRestart}){
    return (
        <div className="Container-Btn__restart">
            <button className = 'Btn__Restart' onClick = {handleGameRestart}>Restart Game</button>
        </div>
    );
}
 
export default RestartBtn;