import * as React from "react";
import "./Header.scss";

import Image from '../../asset/image.js'
import Button from '../components/Button'
import { FaUserAlt, FaHands, FaMailBulk } from "react-icons/fa";

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
                        <div id="name">TAKENCOO</div>
                        <div id="subtext">software engineer</div>
                        {/* <div id="button">
                            <Button className="button_reverse"><FaUserAlt /></Button>
                            <Button className="button_reverse"><FaHands /></Button>
                            <Button className="button_reverse"><FaMailBulk /></Button>
                        </div> */}
                    </div>
                </div>
                {/* <img id="profile_image" src={Image.takenoko} /> */}
            </div>
        );
    }
}
