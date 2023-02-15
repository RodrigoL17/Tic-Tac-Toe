import React from "react";

const ResultBoard = ({ result }) => {
  return (
    <div className="result">
      {result === "draw" ? (
        <p>El resultado es un " Empate "</p>
      ) : (
        <p>
          El ganador es " <span className={`result-${result}`}>{result}</span> "
        </p>
      )}
    </div>
  );
};

export default ResultBoard;
