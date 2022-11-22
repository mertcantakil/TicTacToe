import React from 'react'
import '../style.css';
import { Button } from 'react-bootstrap';

const PlayAgainButton = ({ handleReset }) => {
  return (
    <Button
      className='resetButton'
      onClick={handleReset}>
      Play Again
    </Button>
  )
}
export default PlayAgainButton;