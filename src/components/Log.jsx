export default function Log(props) {


    return <ol id="log">
        {props.turns.map(turn => (
            <li key={`${turn.square.rowIdx}${turn.square.colIdx}`}>
                {turn.player} selected {turn.square.rowIdx},{turn.square.colIdx}
            </li>)
        )}
    </ol>
}