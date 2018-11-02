import * as React from "react";
import {map} from 'ramda';
import "./Career.scss";

import STRING from '../../asset/string'
import CareerBox from "../components/CareerBox"

export interface CareerProps {
}
export interface CareerState {
}

export default class Career extends React.Component<CareerProps, CareerState> {
    render() {
        return (
            <div id="career">
                <div id="career_backgroud">
                    <div id="career_frame" className="section_frame">
                        <div className="section_title_r">
                            CAREER
                        </div>
                        <div className="section_content_r">
                            {map(x => <CareerBox year={x.year} title={x.title} text={x.text} />, STRING.career)}
                        </div>
                        <div className="bigmark"></div>
                    </div>
                </div>
            </div>
        );
    }
}
