import * as React from "react";
import "./Button.scss";

export interface ButtonProps {
}
export interface ButtonState {
}

export default class Header extends React.Component<ButtonProps, ButtonState> {

    constructor(props) {
        super(props)
        this.onClick = this.onClick.bind(this)
    }

    onClick() {
        console.log("button")
    }

    render() {
        return (
            <a className="button" onClick={this.onClick}>
                Button
            </a>
        );
    }
}
