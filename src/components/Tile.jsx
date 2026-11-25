import './Tile.css';

function Tile({ letter = '', status }) {
  const classes = ['tile'];
  if (letter) classes.push('filled');
  if (status) classes.push(status);

  return <div className={classes.join(' ')}>{letter}</div>;
}

export default Tile;
