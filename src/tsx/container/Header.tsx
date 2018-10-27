import * as React from "react";
import "./Header.scss";

import Image from '../../asset/image.js'

export interface HeaderProps {
}
export interface HeaderState {
}

export default class Header extends React.Component<HeaderProps, HeaderState> {
    render() {
        return (
            <div id="header">
                <div id="header_backgroud">
                    <div id="header_frame">
                        {/* <img src={Image.name} /> */}
                        <div id="name">TAKENOKO</div>
                        <div id="subtext">software engineer</div>
                    </div>
                </div>
                {/* <img id="profile_image" src={Image.takenoko} /> */}
            </div>
        );
    }
}
