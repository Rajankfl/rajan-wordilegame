import { useEffect, useState } from 'react';
import GameBoard from './components/GameBoard';
import GameOverModal from './components/GameOverModal';
import Keyboard from './components/Keyboard';
import Toast from './components/Toast';
import useWordle, { GAME_STATUS } from './hooks/useWordle';
import usePhysicalKeyboard from './hooks/usePhysicalKeyboard';
import { REVEAL_DURATION } from './utils/animation';

function App() {
  const {
    solutionWord,
    currentGuess,
    pastGuesses,
    evaluations,
    keyStatuses,
    gameStatus,
    message,
    isInvalidGuess,
    clearInvalidGuess,
    handleKey,
    resetGame,
  } = useWordle();

  usePhysicalKeyboard(handleKey);

  // Wait for the last row to finish flipping before showing the result.
  const [showModal, setShowModal] = useState(false);
  const isGameOver = gameStatus !== GAME_STATUS.IN_PROGRESS;

  useEffect(() => {
    if (!isGameOver) {
      setShowModal(false);
      return undefined;
    }
    const timer = setTimeout(() => setShowModal(true), REVEAL_DURATION + 300);
    return () => clearTimeout(timer);
  }, [isGameOver]);

  return (
    <div className="app">
      <header className="header">
        <h1>Wordle</h1>
      </header>
      <Toast message={message} />
      <GameBoard
        pastGuesses={pastGuesses}
        evaluations={evaluations}
        currentGuess={currentGuess}
        isInvalidGuess={isInvalidGuess}
        onShakeEnd={clearInvalidGuess}
      />
      <Keyboard keyStatuses={keyStatuses} onKey={handleKey} />

      {isGameOver && showModal && (
        <GameOverModal
          gameStatus={gameStatus}
          solutionWord={solutionWord}
          guessCount={pastGuesses.length}
          onPlayAgain={resetGame}
        />
      )}
    </div>
  );
}

export default App;
