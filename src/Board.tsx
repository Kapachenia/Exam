import React from "react";

type BoardType = {
    inc: number
}

const Board = (props: BoardType) => {
    const error = props.inc === 5 ? "error" : ""
    return (
        <div className={`${error} board`}>{props.inc}</div>
    )
}

export default Board