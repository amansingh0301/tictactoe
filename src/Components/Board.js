import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
    const [board,setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(false);

    const handleSquareClick = (position) => {

        console.log(position);
        if (board[position]) {
            return;
        }

        setBoard((prev) => {
            return prev.map((square,pos) => {
                if(pos === position){
                    return isXNext ? 'X' : 'O';
                }

                return square;
            });
        });
        setIsXNext(prev => !prev);
    };

    
    const squareRender = position => {
        return (
            <Square 
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
