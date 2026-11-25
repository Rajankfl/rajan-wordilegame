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

const STATUS_RANK = {
  [LETTER_STATUS.ABSENT]: 1,
  [LETTER_STATUS.PRESENT]: 2,
  [LETTER_STATUS.CORRECT]: 3,
};

// Builds a letter -> status map for the keyboard. A letter keeps the best
// status it has earned so far (correct > present > absent).
export function getKeyStatuses(guesses, evaluations) {
  const statuses = {};

  guesses.forEach((guess, row) => {
    for (let i = 0; i < guess.length; i++) {
      const letter = guess[i];
      const status = evaluations[row][i];
      const current = statuses[letter];
      if (!current || STATUS_RANK[status] > STATUS_RANK[current]) {
        statuses[letter] = status;
      }
    }
  });

  return statuses;
}
