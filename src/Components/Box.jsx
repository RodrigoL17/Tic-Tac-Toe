const Box = ({ position, board, setBoard, player, setPlayer }) => {
  // const [player, setPlayer] = useState(true);
  const positionFix = parseInt(position);

  const handleClick = () => {
    if (board[positionFix].length === 0) {
      if (player) {
        setBoard({ ...board, [positionFix]: "X" });
        setPlayer(!player);
      } else {
        setBoard({ ...board, [positionFix]: "O" });
        setPlayer(!player);
      }
    }
  };

  return (
    <div
      className={`box box-${position} ${board[positionFix]}`}
      onClick={handleClick}
    >
      {board[positionFix]}
    </div>
  );
};

export default Box;
