import React, { useState } from 'react';
import Square from './Square';

const Board = ({board,handleSquareClick,winningSquares}) => {
    
    const squareRender = position => {

        const isWinningSquare = winningSquares.includes(position);

        return (
            <Square 
            isWinningSquare={isWinningSquare}
            value={board[position]} 
            onClick={() => 
                handleSquareClick(position)}
            />
        );
    };

    return (
    <div className="board">
        <div className="board-row">
            {squareRender(0)}
            {squareRender(1)}
            {squareRender(2)}
        </div>

        <div className="board-row">
            {squareRender(3)}
            {squareRender(4)}
            {squareRender(5)}
        </div>

        <div className="board-row">
            {squareRender(6)}
            {squareRender(7)}
            {squareRender(8)}
        </div>
    </div>
    )
}
export default Board;
