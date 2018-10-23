import * as React from "react";
import "./SkillSet.scss";
import Image from '../../asset/image.js'

export interface SkillSetProps {
}
export interface SkillSetState {
}

export default class SkillSet extends React.Component<SkillSetProps, SkillSetState> {
    render() {
        return (
            <div id="skillset">
                <div id="skillset_backgroud">
                    <div id="skillset_frame">
                        <div className="section_title_r">
                            SKILL SET
                        </div>
                        <div className="section_content_r">
                            <div className="skillset_ul">Application</div>
                            <div className="skillset_li">Single Page Aplication (javascript)</div>
                            <div className="skillset_li">Android (kotlin, java)</div>
                            <div className="skillset_li">iOS (Swift, Obj-C)</div>

                            <div className="skillset_ul">Backend</div>
                            <div className="skillset_li">Spring</div>
                            <div className="skillset_li">node.js</div>
                            <div className="skillset_li">golang</div>
                        </div>
                        <img id="image" src={Image.grass} />
                    </div>
                </div>
            </div>
        );
    }
}
