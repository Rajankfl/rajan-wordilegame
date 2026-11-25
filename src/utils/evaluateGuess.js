export const LETTER_STATUS = {
  CORRECT: 'correct',
  PRESENT: 'present',
  ABSENT: 'absent',
};

// Compares a guess with the solution and returns one status per letter.
// Exact matches are marked first so repeated letters are only marked
// "present" as many times as they still appear in the solution.
export function evaluateGuess(guess, solution) {
  const result = Array(guess.length).fill(LETTER_STATUS.ABSENT);
  const remaining = {};

  for (let i = 0; i < solution.length; i++) {
    if (guess[i] === solution[i]) {
      result[i] = LETTER_STATUS.CORRECT;
    } else {
      remaining[solution[i]] = (remaining[solution[i]] || 0) + 1;
    }
  }

  for (let i = 0; i < guess.length; i++) {
    if (result[i] === LETTER_STATUS.CORRECT) continue;
    const letter = guess[i];
    if (remaining[letter] > 0) {
      result[i] = LETTER_STATUS.PRESENT;
      remaining[letter]--;
    }
  }

  return result;
}
