import React from "react";

type TypeButton = {
    disabled: any
    onClick: any
    value: string

}

const Button = (props: TypeButton) => {
    return (
        <button disabled={props.disabled} onClick={props.onClick}>{props.value}</button>
    )
}

export default Button