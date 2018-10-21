import * as React from "react";
import "./AboutMe.scss";

export interface AboutMeProps {
}
export interface AboutMeState {
}

export default class AboutMe extends React.Component<AboutMeProps, AboutMeState> {
    render() {
        return (
            <div id="aboutme">
                <div id="aboutme_backgroud">
                    <div id="aboutme_frame">
                        <div className="section_title">
                            ABOUT ME
                        </div>
                        <div className="section_content">
                            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
