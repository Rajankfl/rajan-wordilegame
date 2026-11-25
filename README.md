# Wordle

A word-guessing game built with React and Vite. Guess the hidden five-letter word in six tries.

## How to play

- Type a five-letter word using your keyboard or the on-screen keys, then press **Enter**.
- Each tile changes color to show how close your guess was:
  - **Green** – the letter is in the word and in the right spot.
  - **Yellow** – the letter is in the word but in a different spot.
  - **Gray** – the letter is not in the word.
- The on-screen keyboard keeps track of the letters you have already tried.
- Guesses must be real words. Find the word within six guesses to win.

## Getting started

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually http://localhost:5173).

### Other scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run build`   | Build for production into `dist/`    |
| `npm run preview` | Serve the production build locally   |

## Project structure

```
src/
├── App.jsx                   # Top-level layout
├── components/
│   ├── GameBoard.jsx         # 6x5 grid of guesses
│   ├── Row.jsx               # A single guess row
│   ├── Tile.jsx              # A single letter tile
│   ├── Keyboard.jsx          # On-screen keyboard
│   ├── GameOverModal.jsx     # Win / loss dialog
│   └── Toast.jsx             # Short status messages
├── hooks/
│   ├── useWordle.js          # Game state and rules
│   └── usePhysicalKeyboard.js
├── utils/
│   ├── evaluateGuess.js      # Tile and key color logic
│   ├── words.js              # Word picking and validation
│   └── animation.js          # Reveal timings
└── data/
    ├── answers.js            # Possible solutions
    └── validWords.js         # Accepted guesses
```

## Credits

The list of accepted guesses comes from [an-array-of-english-words](https://github.com/words/an-array-of-english-words) (MIT License).
