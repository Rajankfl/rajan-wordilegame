import Tile from './Tile';
import { WORD_LENGTH } from '../utils/words';
import './Row.css';

function Row({ letters = '', statuses }) {
  const tiles = [];
  for (let i = 0; i < WORD_LENGTH; i++) {
    tiles.push(<Tile key={i} letter={letters[i]} status={statuses?.[i]} />);
  }

  return <div className="row">{tiles}</div>;
}

export default Row;
