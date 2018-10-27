import * as React from "react";
import {map} from 'ramda';
import "./SkillSet.scss";
import STRING from '../../asset/string'
import Image from '../../asset/image.js';

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
                            {
                                map(x => [
                                    (<div key={JSON.stringify(x)} className="skillset_ul">{x.title}</div>),
                                    map(t => (<div key={t} className="skillset_li">{t}</div>), x.texts)
                                ], STRING.skillset)
                            }
                        </div>
                        <img id="image" src={Image.grass} />
                    </div>
                </div>
            </div>
        );
    }
}
