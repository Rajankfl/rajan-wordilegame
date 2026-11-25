import GameBoard from './components/GameBoard';
import Keyboard from './components/Keyboard';
import useWordle from './hooks/useWordle';
import usePhysicalKeyboard from './hooks/usePhysicalKeyboard';

function App() {
  const { currentGuess, pastGuesses, evaluations, handleKey } = useWordle();

  usePhysicalKeyboard(handleKey);

  return (
    <div className="app">
      <header className="header">
        <h1>Wordle</h1>
      </header>
      <GameBoard pastGuesses={pastGuesses} evaluations={evaluations} currentGuess={currentGuess} />
      <Keyboard onKey={handleKey} />
    </div>
  );
}

export default App;
