import { WORD_LENGTH } from './words';

// Timings for the tile flip when a guess is revealed (in ms).
export const FLIP_DURATION = 500;
export const FLIP_STAGGER = 300;
export const REVEAL_DURATION = FLIP_STAGGER * (WORD_LENGTH - 1) + FLIP_DURATION;
