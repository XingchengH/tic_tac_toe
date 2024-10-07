
export default function GameBoard(props) {
    // const [gameBoard, setGameBoard] = useState(initialGameBoard); // managae the state of the game board

    // function handleSelectSquare(rowIdx, colIdx, playerSymbol) {
    //     // update the game board state base on the previous state
    //     setGameBoard(
    //         (prevGameBoard) => {
    //             const updatedBoard = [...prevGameBoard.map(innerArr => [...innerArr])];
    //             updatedBoard[rowIdx][colIdx] = playerSymbol;
    //             return updatedBoard;
    //         }
    //     );
    //     props.onSelectChange(); // pass the function to the parent component
    // }

    return <ol id="game-board">
        {props.board.map((row, rowIdx) =>
            <li key={rowIdx}>
                <ol>
                    {row.map((playerSymbol, colIdx) =>
                        <li key={colIdx}>
                            <button onClick={() => props.onSelectChange(rowIdx, colIdx)} disabled={playerSymbol !== null}>
                                {playerSymbol}
                            </button>
                        </li>)
                    }
                </ol>
            </li>)}
    </ol>

}