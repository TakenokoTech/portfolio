import * as React from "react";
import "./ScreenTransition.scss";

export interface ScreenTransitionProps {
    active: boolean
}
export interface ScreenTransitionState {
}

export default class ScreenTransition extends React.Component<ScreenTransitionProps, ScreenTransitionState> {

    componentDidMount() {
    }

    render() {
        return (
            <div className="screentransition" data-state={this.props.active ? "active" : ""}>
                <div className="screentransition__effects screentransition__effects-1">
                    <div className="effect"></div>
                    <div className="effect"></div>
                    <div className="effect"></div>
                </div>
                <div className="screentransition__effects screentransition__effects-2">
                    <div className="effect"></div>
                    <div className="effect"></div>
                    <div className="effect"></div>
                </div>
                <div className="screentransition__effects screentransition__effects-3">
                    <div className="effect"><span /><span /><span /><span /></div>
                    <div className="effect"><span /><span /><span /><span /></div>
                    <div className="effect"><span /><span /><span /><span /></div>
                </div>
                <div className="screentransition__view-1">
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
                <div className="screentransition__view-2">
                    <div />
                    <div />
                    <div />
                </div>
            </div>
        );
    }
}
