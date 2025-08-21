import { useState, useEffect } from 'react';
import { GiPodiumWinner } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

function Square({ value, onSquareClick }) {
  return (
    <button className="border border-solid p-6 rounded-lg bg-myDark cursor-pointer text-white" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay, endMessage, setEndMessage }) {

  useEffect(() => {
    const result = calculateWinner(squares, setEndMessage);
    if (result === 'draw') {
      setEndMessage("It's a tie! Another round?");
    }
    else if (result === 'X' || result === 'O') {
      setEndMessage(`The winner is player ${result}. Another round?`);
    }
  }, [squares, setEndMessage]);


  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) return;

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares, setEndMessage);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
    {endMessage && (
          <div
            className="absolute inset-0 flex items-center justify-center z-20"
            role="dialog"
            aria-modal="true"
          >
            <div className="relative bg-white p-6 w-lg rounded-lg text-center shadow-lg">
              <button
              type="button"
              aria-label="Close"
              className="absolute top-2 right-2 text-myBlue cursor-pointer hover:text-myDark text-3xl"
              onClick={() => setEndMessage("")}
                >
              <span className="sr-only">Close</span>
              <FaTimes size={20} />
              </button>
    
              <GiPodiumWinner className="mx-auto mb-2 text-5xl font-myText text-myBlue" />
              <p className="mb-6 text-lg font-myText text-myOcean">{endMessage}</p>
              <button
                className="px-4 py-2 bg-myBlue font-myText text-lg font-bold text-white rounded hover:bg-myDark cursor-pointer"
                onClick={() => {
                  setEndMessage("");         
                  window.location.reload();   
                }}
                >
                Play again
              </button>
            </div>
          </div>
        )}
        
     <div className="my-8 flex items-center justify-center flex-col">
       <div className="pb-8">{status}</div>
      <div className="grid grid-cols-3 w-xs h-[100px]">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="grid grid-cols-3 w-xs h-[100px]">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="grid grid-cols-3 w-xs h-[100px]">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
     </div>
     
    </>
  );
}

const Tictactoe = () => {
  const [endMessage, setEndMessage] = useState("");
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }
  return (
    <div className="bg-myDark">
      <div className="bg-myWarm mx-6 flex items-center justify-center flex-col">
    <div className="text-4xl font-myHeader text-myBlue">
      <Board 
      xIsNext={xIsNext} 
      squares={currentSquares} 
      onPlay={handlePlay}
      endMessage={endMessage}
      setEndMessage={setEndMessage}
     />
    </div>
  </div>
</div>
  );
}

function calculateWinner(squares, setEndMessage) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      setEndMessage(`The winner is player ${squares[a]}. Would you like to play again?`);
      return squares[a];
    } 
  } 
  if (squares.every(square => square !== null)) {
    return 'draw';
  }
  return null;
}

export default Tictactoe