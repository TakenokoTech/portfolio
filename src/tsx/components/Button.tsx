import * as React from "react";
import "./Button.scss";

export interface ButtonProps {
    className: string
    children: any
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
                {this.props.children || "Button"}
            </a>
        );
    }
}
