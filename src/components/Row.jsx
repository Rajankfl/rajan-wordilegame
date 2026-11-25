import Tile from './Tile';
import { WORD_LENGTH } from '../utils/words';
import './Row.css';

function Row({ letters = '', statuses, shake = false, onShakeEnd }) {
  const tiles = [];
  for (let i = 0; i < WORD_LENGTH; i++) {
    tiles.push(<Tile key={i} letter={letters[i]} status={statuses?.[i]} position={i} />);
  }

  return (
    <div className={shake ? 'row shake' : 'row'} onAnimationEnd={shake ? onShakeEnd : undefined}>
      {tiles}
    </div>
  );
}

export default Row;
