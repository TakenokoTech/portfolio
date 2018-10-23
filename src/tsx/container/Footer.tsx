import * as React from "react";
import "./Footer.scss";

import Image from '../../asset/image.js'

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
                        <div id="subtext">© 2018 Takenoko Tech.</div>
                    </div>
                </div>
            </div>
        );
    }
}
