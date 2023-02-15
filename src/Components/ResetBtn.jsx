import React from "react";

const ResetBtn = ({ setBoard, initialBoard, setPlayer, setResult }) => {
  const reset = () => {
    setBoard(initialBoard);
    setPlayer(true);
    setResult("");
  };

  return (
    <button className="reset" onClick={reset}>
      RESET
    </button>
  );
};

export default ResetBtn;
