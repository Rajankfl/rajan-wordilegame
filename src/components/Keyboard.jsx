import './Keyboard.css';

const KEY_ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACKSPACE'],
];

function BackspaceIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"
      />
    </svg>
  );
}

function Key({ value, status, onKey }) {
  const isWide = value === 'ENTER' || value === 'BACKSPACE';
  const classes = ['key'];
  if (isWide) classes.push('wide');
  if (status) classes.push(status);

  return (
    <button
      type="button"
      className={classes.join(' ')}
      onClick={(event) => {
        onKey(value);
        // Drop focus so pressing Enter on the physical keyboard
        // doesn't also "click" this button again.
        event.currentTarget.blur();
      }}
      aria-label={value === 'BACKSPACE' ? 'backspace' : value.toLowerCase()}
    >
      {value === 'BACKSPACE' ? <BackspaceIcon /> : value}
    </button>
  );
}

function Keyboard({ keyStatuses = {}, onKey }) {
  return (
    <div className="keyboard">
      {KEY_ROWS.map((row, i) => (
        <div className="keyboard-row" key={i}>
          {i === 1 && <div className="key-spacer" />}
          {row.map((key) => (
            <Key key={key} value={key} status={keyStatuses[key]} onKey={onKey} />
          ))}
          {i === 1 && <div className="key-spacer" />}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
