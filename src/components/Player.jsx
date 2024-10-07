import { useState } from "react"

export default function Player(props) {
    const [playerName, setPlayerName] = useState(props.name)
    const [isEditing, setIsEditing] = useState(false)

    function handleClick() {
        // setIsEditing(!isEditing)
        setIsEditing((prevIsEditing) => !prevIsEditing)
        props.onChangeName(props.symbol, playerName)
    }

    function handleInputChange(event) {
        setPlayerName(event.target.value)
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>
    if (isEditing) {
        editablePlayerName = <input type="text" value={playerName} onChange={handleInputChange} required />
    }

    return <li className={props.isActive ? "active" : undefined}>
        <span className="player">
            {editablePlayerName}
            <span className="player-symbol">{props.symbol}</span>
        </span>
        <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
}

// if is editing, then show editing else edit button