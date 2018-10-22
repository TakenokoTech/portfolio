import * as React from "react";
import "./SkillSet.scss";

export interface CareerProps {
}
export interface CareerState {
}

export default class Career extends React.Component<CareerProps, CareerState> {
    render() {
        return (
            <div id="skillset">
                <div id="skillset_backgroud">
                    <div id="skillset_frame">
                        <div className="section_title_r">
                            CAREER
                        </div>
                        <div className="section_content_r">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
