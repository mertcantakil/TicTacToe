import React from 'react';
import '../style.css';
import { Button } from 'react-bootstrap';

const SquareButton = ({handleClick, square, i}) => {
  return (
    <Button
      id={i}
      key={i}
      variant="outline-dark"
      className="square"
      onClick={handleClick}
    >
      {square[i]}
    </Button>
  )
}

export default SquareButton;