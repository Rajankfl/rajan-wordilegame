import { useEffect } from 'react';

// Forwards physical key presses to the game as normalised key names:
// 'ENTER', 'BACKSPACE' or a single uppercase letter.
function usePhysicalKeyboard(onKey) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.ctrlKey || event.metaKey || event.altKey) return;

      const { key } = event;
      if (key === 'Enter') {
        event.preventDefault();
        onKey('ENTER');
      } else if (key === 'Backspace') {
        onKey('BACKSPACE');
      } else if (/^[a-zA-Z]$/.test(key)) {
        onKey(key.toUpperCase());
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onKey]);
}

export default usePhysicalKeyboard;
