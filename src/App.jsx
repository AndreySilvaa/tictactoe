import "./App.css";
import { useEffect, useState } from "react";
import { combinacoes } from "./combinações";

// CSS
import "./styles/app.sass";

function App() {
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("X");

  useEffect(() => {
    checkWin();
  }, [squares]);

  // Fazendo a jogada
  const setSquare = (value) => {
    let newSquares = [...squares];

    if (squares[value] !== "") {
      return;
    } else {
      for (let i = 0; i <= squares.length; i++) {
        if (value == i) {
          newSquares[i] = player;
        }
      }
    }

    if (player == "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }

    setSquares(newSquares);
  };

  //Checando a jogada para saber se há um vencedor
  const checkWin = () => {

    combinacoes.forEach((value, i) => {
      if (
        (squares[value[0]] == "X" &&
          squares[value[1]] == "X" &&
          squares[value[2]] == "X") ||
        (squares[value[0]] == "O" &&
          squares[value[1]] == "O" &&
          squares[value[2]] == "O")
      ) {
        alert(`Vencedor ${player}`); // EXIBIR O VENCEDOR CORRETO
      }
    });
  };

  return (
    <>
      <div className="board">
        <div className="row">
          <div className="square" onClick={() => setSquare(0)}>
            {squares[0]}
          </div>
          <div className="square" onClick={() => setSquare(1)}>
            {squares[1]}
          </div>
          <div className="square" onClick={() => setSquare(2)}>
            {squares[2]}
          </div>
        </div>

        <div className="row">
          <div className="square" onClick={() => setSquare(3)}>
            {squares[3]}
          </div>
          <div className="square" onClick={() => setSquare(4)}>
            {squares[4]}
          </div>
          <div className="square" onClick={() => setSquare(5)}>
            {squares[5]}
          </div>
        </div>

        <div className="row">
          <div className="square" onClick={() => setSquare(6)}>
            {squares[6]}
          </div>
          <div className="square" onClick={() => setSquare(7)}>
            {squares[7]}
          </div>
          <div className="square" onClick={() => setSquare(8)}>
            {squares[8]}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
