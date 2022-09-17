import * as React from "react";
import {map} from 'ramda';
import "./Career.scss";

import STRING from '../../asset/string'
import CareerBox from "../components/CareerBox"

export interface CareerProps {
    onShowExperience: () => void
}
export interface CareerState {
    title: string
}

const initState = {
    title: "CAREER"
}

export default class Career extends React.Component<CareerProps, CareerState> {
    constructor(props) {
        super(props);
        this.state = initState
    }
    render() {
        return (
            <div id="career">
                <div id="career_backgroud">
                    <div id="career_frame" className="section_frame">
                        <div className="section_title_r section_title_clickable"
                             onClick={this.props.onShowExperience}
                             onMouseOver={() => this.setState({title: "RESUME"})}
                             onMouseOut={() => this.setState({title: initState.title})}>
                            {this.state.title}
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
