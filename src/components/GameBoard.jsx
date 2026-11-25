import Row from './Row';
import { MAX_GUESSES } from '../utils/words';
import './GameBoard.css';

function GameBoard({ pastGuesses, evaluations, currentGuess }) {
  const rows = [];

  for (let i = 0; i < MAX_GUESSES; i++) {
    if (i < pastGuesses.length) {
      rows.push(<Row key={i} letters={pastGuesses[i]} statuses={evaluations[i]} />);
    } else if (i === pastGuesses.length) {
      rows.push(<Row key={i} letters={currentGuess} />);
    } else {
      rows.push(<Row key={i} />);
    }
  }

  return (
    <div className="board-container">
      <div className="board">{rows}</div>
    </div>
  );
}

export default GameBoard;
