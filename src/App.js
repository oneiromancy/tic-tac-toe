import React, { Component } from 'react';
import './App.scss';

import Scoreboard from './components/scoreboard/Scoreboard';
import Gameplay from './components/gameplay/Gameplay';
import RestartBtn from './components/restartBtn/RestartBtn';

class App extends Component {

    state = {
        score: {
            'O': 0,
            'X': 0,
        },
        playerOnMove: 'O',
        gameboard: new Array(9).fill(null),
        gameover: false
    }

    resetGame = () => {
        this.setState({
            gameboard: new Array(9).fill(null),
            gameover: false
        });
    } 

    switchTurns = () => {
        this.setState({
            playerOnMove: this.state.playerOnMove === 'O' ? 'X' : 'O'
        })
    }

    isMoveValid = (pos) => {

        const gameover = this.state.gameover;
        const boardPos = this.state.gameboard[pos];

        if(!gameover && !boardPos){
            this.insertMove(pos);
        }

    }

    insertMove = (pos) => {
        
        this.setState( prevState => ({
            gameboard: [...prevState.gameboard.slice(0, pos), 
                        this.state.playerOnMove, 
                        ...prevState.gameboard.slice(pos + 1, )],
        }), () => {

            const isVictory = this.isVictory()
            const isDraw = this.isDraw();

            if(isVictory){
                this.gameover();
                this.updateScore();
            } else if(isDraw){
                this.gameover();
            } else{
                this.switchTurns();
            }

        });

    }

    filterPlayerOnMove = () => {

        const gameboard = this.state.gameboard;
        const playerOnMove = this.state.playerOnMove;

        return gameboard.map((symbol, index) => {

            return (symbol === playerOnMove)? index: symbol
        
        }).filter(el => {

            return typeof el === 'number';

        });

    }

    isVictory = () => {
        
        const victorySet = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        const moves = this.filterPlayerOnMove();

        for (let strategy = 0; strategy < victorySet.length; strategy++) {

            const isPlayerOnMoveVictorious = victorySet[strategy].every( pos => {
                return moves.includes(pos)
            });

            if(isPlayerOnMoveVictorious){
                return true
            }

        }

        return false

    }

    isDraw = () => {
        return this.state.gameboard.every((move) => {
            return move !== null
        })
    }

    gameover = () => {
        this.setState({
            gameover: true
        })
    }

    updateScore = () => {
        this.setState(prevState => ({
            score: {
                ...prevState.score, 
                [this.state.playerOnMove]: prevState.score[this.state.playerOnMove] + 1
            }
        }))
    }    

    render() {
        const score = this.state.score;
        const gameboard = this.state.gameboard;
        const gameover = this.state.gameover;
        const playerOnMove = this.state.playerOnMove;
        const isMoveValid = this.isMoveValid;
        const isDraw = this.isDraw();
        const resetGame = this.resetGame;
        
        return (
            <div className="App">
            
                <Scoreboard 
                    score = {score} 
                    playerOnMove = {playerOnMove}
                    isGameover = {gameover}
                />

                <Gameplay 
                    playerOnMove = {playerOnMove} 
                    gameboard = {gameboard} 
                    isGameover = {gameover}
                    handleMoveAttempt = {isMoveValid}
                    isDraw = {isDraw}
                />

                <RestartBtn handleGameRestart = {resetGame} />

            </div>
        );
    }
}

export default App;
