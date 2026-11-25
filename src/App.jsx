import GameBoard from './components/GameBoard';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Wordle</h1>
      </header>
      <GameBoard pastGuesses={[]} evaluations={[]} currentGuess="" />
    </div>
  );
}

export default App;
