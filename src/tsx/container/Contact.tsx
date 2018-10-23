import * as React from "react";
import "./SkillSet.scss";

export interface ContactProps {
}
export interface ContactState {
}

export default class Contact extends React.Component<ContactProps, ContactState> {
    render() {
        return (
            <div id="product">
                <div id="product_backgroud">
                    <div id="product_frame">
                        <div className="section_title">
                            CONTACT
                        </div>
                        <div className="section_content">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
