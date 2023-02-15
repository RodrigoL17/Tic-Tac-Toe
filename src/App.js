import Board from "./Components/Board";
import Box from "./Components/Box";
import { useState, useEffect } from "react";
import ResetBtn from "./Components/ResetBtn";
import ResultBoard from "./Components/ResultBoard";
import ScoreBoard from "./Components/ScoreBoard";

const initialBoard = {
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
  7: "",
  8: "",
  9: "",
};
const boxPlace = Object.keys(initialBoard);
const App = () => {
  const [board, setBoard] = useState(initialBoard);
  const [player, setPlayer] = useState(true);
  const [result, setResult] = useState("");
  const [score, setScore] = useState({ X: 0, O: 0, Empates: 0 });

  useEffect(() => {

    const winCondition = [
      board[1] + board[2] + board[3],
      board[1] + board[5] + board[9],
      board[1] + board[4] + board[7],
      board[2] + board[5] + board[8],
      board[3] + board[5] + board[7],
      board[3] + board[6] + board[9],
      board[4] + board[5] + board[6],
      board[7] + board[8] + board[9],
    ];

    const xCondition = winCondition.includes("XXX");
    const oCondition = winCondition.includes("OOO");

    if (xCondition) {
      setResult("X");
      setScore({ ...score, X: score.X + 1 });
    } else if (oCondition) {
      setResult("O");
      setScore({ ...score, O: score.O + 1 });
    } else if (Object.values(board).join("").length === 9) {
      setResult("draw");
      setScore({ ...score, Empates: score.Empates + 1 });
    }
  }, [board]);

  return (
    <div className="App">
      <ScoreBoard score={score} />
      <Board>
        {boxPlace.map((box) => (
          <Box
            key={box}
            position={box}
            board={board}
            setBoard={setBoard}
            player={player}
            setPlayer={setPlayer}
          />
        ))}
      </Board>
      {result.length > 0 && <ResultBoard result={result} />}
      <ResetBtn
        setBoard={setBoard}
        initialBoard={initialBoard}
        setPlayer={setPlayer}
        setResult={setResult}
      />
    </div>
  );
};

export default App;


