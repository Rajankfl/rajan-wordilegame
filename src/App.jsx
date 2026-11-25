import GameBoard from './components/GameBoard';
import GameOverModal from './components/GameOverModal';
import Keyboard from './components/Keyboard';
import Toast from './components/Toast';
import useWordle, { GAME_STATUS } from './hooks/useWordle';
import usePhysicalKeyboard from './hooks/usePhysicalKeyboard';

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

      {gameStatus !== GAME_STATUS.IN_PROGRESS && (
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
