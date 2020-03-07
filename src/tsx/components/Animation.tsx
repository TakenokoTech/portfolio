import * as React from "react";
import "./Animation.scss";

export interface AnimationProps {
    className: ""
}
export interface AnimationState {
}

export default class Animation extends React.Component<AnimationProps, AnimationState> {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="stars_backgroud">
                {/* <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div> */}
                <div id='title'><span>PURE CSS</span><br /><span>PARALLAX PIXEL STARS</span></div>
            </div>
        );
    }
}
