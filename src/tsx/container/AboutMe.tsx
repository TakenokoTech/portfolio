import * as React from "react";
import {map} from 'ramda';
import "./AboutMe.scss";

import STRING from '../../asset/string'

export interface AboutMeProps {
}
export interface AboutMeState {
}

export default class AboutMe extends React.Component<AboutMeProps, AboutMeState> {
    render() {
        return (
            <div id="aboutme">
                <div id="aboutme_backgroud">
                    <div id="aboutme_frame" className="section_frame">
                        <div className="section_title">
                            ABOUT ME
                        </div>
                        <div className="section_content">
                            <div className="text">
                            {
                                map(x=> [ x, <br key={JSON.stringify(x)}/> ], STRING.aboutme.text)
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
