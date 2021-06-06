import React,{useState} from "react";
import Board from './Components/Board';
import { calculateWinner } from "./helpers";
import History from './Components/History'
import StatusMessage from './Components/StatusMessage'
import './styles/root'

export default () => {

  const [history,setHistory] = useState([{board:Array(9).fill(null), isXNext:true}]);
  const [currentMove,setCurrentMove] = useState(0);

  const current = history[currentMove];

  const {winner,winningSquares} = calculateWinner(current.board);

  const handleSquareClick = (position) => {
      if (current.board[position] || winner) {
          return;
      }

      setHistory((prev) => {

        const last = prev[prev.length-1];

        const newBoard = last.board.map((square,pos) => {
              if(pos === position){
                  return last.isXNext ? 'X' : 'O';
              }

              return square;
          });
          return prev.concat({board : newBoard,isXNext : !last.isXNext});
      });
      setCurrentMove(prev => prev+1);
  };

  const moveTo = (position) => {
    setCurrentMove(position);
  }

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <StatusMessage winner={winner} current={current}/>
      <Board board={current.board} handleSquareClick={handleSquareClick} winningSquares={winningSquares}/>
      <History history={history} currentMove={currentMove} moveTo={moveTo}/>
    </div>
  )
};
