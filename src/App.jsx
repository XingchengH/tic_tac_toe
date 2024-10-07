import React, { useState } from "react"
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combination";
import GameOver from "./components/GameOver";

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
}

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

function deriveActivePlayer(gameTurn) {
  let currentPlayer = "X";
  if (gameTurn.length > 0 && gameTurn[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function derivateGameBoard(gameTurn) {
  let gameBoard = [...INITIAL_GAME_BOARD.map(innerArr => [...innerArr])]; // deep copy
  for (const turn of gameTurn) {
      const { square, player } = turn;
      const { rowIdx, colIdx } = square;
      gameBoard[rowIdx][colIdx] = player;
  }
  return gameBoard;
}

function deriveWinnder(gameBoard, player) {
  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {
    // const firstSquare = gameBoard[combination[0].rowIdx][combination[0].colIdx];
    // const secondSquare = gameBoard[combination[1].rowIdx][combination[1].colIdx];
    // const thirdSquare = gameBoard[combination[2].rowIdx][combination[2].colIdx];
    let [firstSquare, secondSquare, thirdSquare] = combination.map(({ rowIdx, colIdx }) => gameBoard[rowIdx][colIdx]);
    if (firstSquare === secondSquare && secondSquare === thirdSquare && firstSquare !== null) {
      winner = player[firstSquare];
      break;
    }
  };

  return winner;
}

function App() {
  const [gameTurn, setGameTurn] = useState([]);
  // const [activePlayer, setActivePlayer] = useState("X");
  const[player, setPlayer] = useState(PLAYERS);

  const gameBoard = derivateGameBoard(gameTurn);
  const activePlayer = deriveActivePlayer(gameTurn);
  const winner = deriveWinnder(gameBoard, player);
  const draw = gameTurn.length === 9 && !winner;

  function handlePlayerChange(rowIdx, colIdx) {
    // setActivePlayer((prevActivePlayer) => prevActivePlayer === "X" ? "O" : "X");
    // setGameTurn((prevGameTurn) => {
    //   let currentPlayer = "X";
    //   if (prevGameTurn.length > 0 && prevGameTurn[0].player === "X") {
    //     currentPlayer = "O";
    //   }

      setGameTurn((prevGameTurn) => {
        const currentPlayer = deriveActivePlayer(prevGameTurn);

        const updatedGameTurn = [{ square: { rowIdx, colIdx }, player: currentPlayer },
        ...prevGameTurn];

      return updatedGameTurn;
    });
  }

  function handleRestart() {
    setGameTurn([]);
  }

  function handlePlayerNameChange(playerSymbol, newName) {
    setPlayer((prevPlayer) => {
      return {
        ...prevPlayer,
        [playerSymbol]: newName,
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name={PLAYERS.X} symbol="X" isActive={activePlayer === "X"} onChangeName={handlePlayerNameChange} />
          <Player name={PLAYERS.Y} symbol="O" isActive={activePlayer === "O"} onChangeName={handlePlayerNameChange}/>
        </ol>
        {(winner || draw) && <GameOver winner={winner} onRestart={handleRestart}/>}
        <GameBoard
          onSelectChange={handlePlayerChange}
          symbol={activePlayer}
          board = {gameBoard}
        />
      </div>
      <Log turns ={gameTurn}/>
    </main>
  )
}

export default App