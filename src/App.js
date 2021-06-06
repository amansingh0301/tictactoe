import React,{useState} from "react";
import Board from './Components/Board';
import { calculateWinner } from "./helpers";
import History from './Components/History'
import './styles/root'

export default () => {
  // const [board,setBoard] = useState(Array(9).fill(null));
  // const [isXNext, setIsXNext] = useState(false);

  const [history,setHistory] = useState([{board:Array(9).fill(null), isXNext:true}]);
  const [currentMove,setCurrentMove] = useState(0);

  const current = history[currentMove];

  const winner = calculateWinner(current.board);
  const message = winner ? `Winner is ${winner}` : `Next player is ${current.isXNext ? 'X' : 'O'}`;

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
      <h2>{message}</h2>
      <Board board={current.board} handleSquareClick={handleSquareClick}/>
      <History history={history} currentMove={currentMove} moveTo={moveTo}/>
    </div>
  )
};
