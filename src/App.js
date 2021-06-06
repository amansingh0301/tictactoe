import React,{useState} from "react";
import Board from './Components/Board';
import { calculateWinner } from "./helpers";
import History from './Components/History'
import StatusMessage from './Components/StatusMessage'
import './styles/root'

const NEW_GAME = [{board:Array(9).fill(null), isXNext:true}];

export default () => {

  const [history,setHistory] = useState(NEW_GAME);
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

  const onNewGame = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  } 

  return (
    <div className="app">
      <h1>Tic <span className='text-green'>Tac</span> Toe</h1>
      <StatusMessage winner={winner} current={current}/>
      <Board board={current.board} handleSquareClick={handleSquareClick} winningSquares={winningSquares}/>
      <button onClick={onNewGame} type='button' className={`btn-reset ${winner ? 'active' : ''}`}>Start new game</button>
      <h2 style={{fontWeight:'normal'}}>Current game history</h2>
      <History history={history} currentMove={currentMove} moveTo={moveTo}/>
      <div className='bg-balls'/>
    </div>
  )
};
