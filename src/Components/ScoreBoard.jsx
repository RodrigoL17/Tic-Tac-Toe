import React from "react";

const ScoreBoard = ({ score }) => {
  return (
    <div className="scoreboard">
      <p>
        Puntos "<span className="team-X">X</span>" :{" "}
        <span className="points">{score.X}</span> | Puntos "
        <span className="team-O">O</span>" :{" "}
        <span className="points">{score.O}</span> | <span>Empates</span>:{" "}
        <span className="points">{score.Empates}</span>
      </p>
    </div>
  );
};

export default ScoreBoard;
