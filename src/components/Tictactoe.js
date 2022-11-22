import '../style.css';
import { Row, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import SquareButton from './SqaureButton';
import PlayAgainButton from './ResetButton';

const Tictactoe = () => {

  const [text, setText] = useState('X');
  const [user, setUser] = useState(1);
  const [winner, setWinner] = useState('');
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (event) => {
    //trigger click event when if array index is null or winner is empty string
    if (!squares[event.target.id] && !winner) {
      if (user === 1) {
        setUser(2);
        setText('O');
      }
      else {
        setUser(1);
        setText('X');
      }
      let tempSquareArr = [...squares];
      tempSquareArr[event.target.id] = text;
      setSquares(tempSquareArr);
    }
  }

  const handleReset = () => {
    setUser(1);
    setText('X');
    setSquares(Array(9).fill(null));
  }

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a] === 'X' ? 1 : 2;
      }
    }
    return null;
  }

  useEffect(() => {
    setWinner(calculateWinner(squares));
  }, [squares])

  return (
    <Container className='container'>
      <div>
        <h1 className='customText'>Tic Tac Toe</h1>
        <Row className='rowWidth'>
          {
            squares.map((_, i) => (
              <div className='col-4'>
                <SquareButton
                  handleClick={handleClick}
                  square={squares}
                  i={i}
                />
              </div>
            ))
          }
        </Row>
        {
          winner && <h3 className='customText'>Winner - Player {winner}</h3>
        }
        <h3 className='customText'>{user}. Player Your Turn</h3>
        <PlayAgainButton
          handleReset={handleReset}
        />
      </div>
    </Container>
  );
}

export default Tictactoe;
