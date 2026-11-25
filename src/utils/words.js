import ANSWERS from '../data/answers';
import VALID_WORDS from '../data/validWords';

export const WORD_LENGTH = 5;
export const MAX_GUESSES = 6;

export function getRandomWord(exclude) {
  let word;
  do {
    word = ANSWERS[Math.floor(Math.random() * ANSWERS.length)];
  } while (word === exclude && ANSWERS.length > 1);
  return word.toUpperCase();
}

export function isValidWord(word) {
  return VALID_WORDS.has(word.toLowerCase());
}
