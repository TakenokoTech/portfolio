import * as React from "react";
import "./Contact.scss";

export interface ContactProps {
}
export interface ContactState {
}

export default class Contact extends React.Component<ContactProps, ContactState> {
    render() {
        return (
            <div id="contact">
                <div id="contact_backgroud">
                    <div id="contact_frame" className="section_frame">
                        <div className="section_title">
                            CONTACT
                        </div>
                        <div className="section_content">
                            <div className="email1">Email</div>
                            <a className="email2" href="mailto:takenoko.tech@gmail.com">takenoko.tech(a)gmail.com</a>
                        </div>
                        <div className="bigmark"></div>
                    </div>
                </div>
            </div>
        );
    }
}
