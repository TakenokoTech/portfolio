import * as React from "react";
import "./Button.scss";

export interface ButtonProps {
    className: ""
}
export interface ButtonState {
}

export default class Button extends React.Component<ButtonProps, ButtonState> {

    constructor(props) {
        super(props)
        this.onClick = this.onClick.bind(this)
    }

    onClick() {
        console.log("button")
    }

    render() {
        return (
            <a className={`base_button ${this.props.className}`} onClick={this.onClick}>
                Button
            </a>
        );
    }
}
