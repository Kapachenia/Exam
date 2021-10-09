import React from "react";
import Board from "./Board";
import Button from "./Button";

type TypeCounter = {
    inc: number
    setIncPlus: () => void
    setInc: any
}

const Counter = (props: TypeCounter) => {

    const callback = () => {props.setInc(0)}
    const maxInc = props.inc === 5
    const minInc = props.inc === 0


    return (
        <div>
            <Board inc={props.inc} />
            <div className={"buttons"}>
                <Button disabled={maxInc} onClick={props.setIncPlus} value={'inc'} />
                <Button disabled={minInc} onClick={callback} value={'reset'} />
            </div>
        </div>
    )
}

export default Counter