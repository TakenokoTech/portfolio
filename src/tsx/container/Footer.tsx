import * as React from "react";
import "./Footer.scss";

import STRING from '../../asset/string'

export interface FooterProps {
}
export interface FooterState {
}

export default class Footer extends React.Component<FooterProps, FooterState> {
    render() {
        return (
            <div id="footer">
                <div id="footer_backgroud">
                    <div id="footer_frame">
                        <div id="subtext">{STRING.fotter.text}</div>
                    </div>
                </div>
            </div>
        );
    }
}
