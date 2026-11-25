import { useEffect, useRef } from 'react';
import { GAME_STATUS } from '../hooks/useWordle';
import './GameOverModal.css';

const WIN_MESSAGES = ['Genius', 'Magnificent', 'Impressive', 'Splendid', 'Great', 'Phew'];

function GameOverModal({ gameStatus, solutionWord, guessCount, onPlayAgain }) {
  const buttonRef = useRef(null);
  const won = gameStatus === GAME_STATUS.WON;

  useEffect(() => {
    buttonRef.current?.focus();
  }, []);

  return (
    <div className="modal-overlay">
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <h2 id="modal-title">{won ? WIN_MESSAGES[guessCount - 1] : 'Game Over'}</h2>

        {won ? (
          <p>
            You found the word in {guessCount} {guessCount === 1 ? 'guess' : 'guesses'}.
          </p>
        ) : (
          <p>You ran out of guesses. The word was:</p>
        )}

        <div className={`modal-solution ${won ? 'won' : 'lost'}`}>{solutionWord}</div>

        <button ref={buttonRef} type="button" className="modal-button" onClick={onPlayAgain}>
          Play Again
        </button>
      </div>
    </div>
  );
}

export default GameOverModal;
