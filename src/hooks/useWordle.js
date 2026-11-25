import { useCallback, useMemo, useState } from 'react';
import { evaluateGuess } from '../utils/evaluateGuess';
import { getRandomWord, MAX_GUESSES, WORD_LENGTH } from '../utils/words';

export const GAME_STATUS = {
  IN_PROGRESS: 'IN_PROGRESS',
  WON: 'WON',
  LOST: 'LOST',
};

function useWordle() {
  const [solutionWord] = useState(() => getRandomWord());
  const [currentGuess, setCurrentGuess] = useState('');
  const [pastGuesses, setPastGuesses] = useState([]);
  const [gameStatus] = useState(GAME_STATUS.IN_PROGRESS);

  const isPlaying = gameStatus === GAME_STATUS.IN_PROGRESS;

  const evaluations = useMemo(
    () => pastGuesses.map((guess) => evaluateGuess(guess, solutionWord)),
    [pastGuesses, solutionWord]
  );

  const addLetter = useCallback(
    (letter) => {
      if (!isPlaying) return;
      setCurrentGuess((guess) =>
        guess.length < WORD_LENGTH ? guess + letter.toUpperCase() : guess
      );
    },
    [isPlaying]
  );

  const removeLetter = useCallback(() => {
    if (!isPlaying) return;
    setCurrentGuess((guess) => guess.slice(0, -1));
  }, [isPlaying]);

  const submitGuess = useCallback(() => {
    if (!isPlaying) return;
    if (currentGuess.length !== WORD_LENGTH) return;
    if (pastGuesses.length >= MAX_GUESSES) return;

    setPastGuesses((guesses) => [...guesses, currentGuess]);
    setCurrentGuess('');
  }, [isPlaying, currentGuess, pastGuesses.length]);

  const handleKey = useCallback(
    (key) => {
      if (key === 'ENTER') submitGuess();
      else if (key === 'BACKSPACE') removeLetter();
      else if (/^[A-Z]$/.test(key)) addLetter(key);
    },
    [addLetter, removeLetter, submitGuess]
  );

  return {
    solutionWord,
    currentGuess,
    pastGuesses,
    evaluations,
    gameStatus,
    handleKey,
  };
}

export default useWordle;
