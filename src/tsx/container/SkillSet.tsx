import * as React from "react";
import { map } from 'ramda';
import ScrollReveal from "scrollreveal"
import "./SkillSet.scss";
import STRING from '../../asset/string'
import Image from '../../asset/image.js';

export interface SkillSetProps {
}
export interface SkillSetState {
}

export default class SkillSet extends React.Component<SkillSetProps, SkillSetState> {

    componentDidMount() {
        const config = (origin: string, duration: number, delay: number, distance: number): any => {
            return {
                origin: origin,
                duration: duration,
                delay: delay,
                distance: distance + 'px',
                scale: 1,
                easing: 'ease',
                reset: true,
                opacity: 0
            }
        }
        ScrollReveal().reveal(this.refs.img, config('right', 1000, 500, 0))
    }

    render() {
        return (
            <div id="skillset">
                <div id="skillset_backgroud">
                    <div id="skillset_frame" className="section_frame">
                        <div className="section_title_r">
                            SKILL SET
                        </div>
                        <div className="section_content_r">
                            {
                                map(x => [
                                    (<div key={JSON.stringify(x)} className={`skillset_ul index${x.no}`}>{x.title}</div>),
                                    map(t => (<div key={t} className="skillset_li">{t}</div>), x.texts)
                                ], STRING.skillset)
                            }
                        </div>
                        <img id="image" src={Image.grass} ref='img' />
                    </div>
                </div>
            </div>
        );
    }
}
