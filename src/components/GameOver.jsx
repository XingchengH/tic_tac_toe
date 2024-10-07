export default function GameOver(props) {
    return <div id="game-over">
        <h2>Game Over</h2>
        <p>{props.winner ? `Winner: ${props.winner}` : "It's a tie!"}</p>
        <button onClick={props.onRestart}>Restart</button>
    </div>
}