import { FLIP_DURATION, FLIP_STAGGER } from '../utils/animation';
import './Tile.css';

function Tile({ letter = '', status, position = 0 }) {
  const classes = ['tile'];
  if (letter) classes.push('filled');
  if (status) classes.push(status, 'reveal');

  const style = status
    ? {
        animationDelay: `${position * FLIP_STAGGER}ms`,
        animationDuration: `${FLIP_DURATION}ms`,
      }
    : undefined;

  return (
    <div className={classes.join(' ')} style={style}>
      {letter}
    </div>
  );
}

export default Tile;
