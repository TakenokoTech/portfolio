import * as React from "react";
import "./ImageBox.scss";

export interface ImageBoxProps {
    img: string,
    title: string,
    text: string,
    url: string
}
export interface ImageBoxState {
}

export default class ImageBox extends React.Component<ImageBoxProps, ImageBoxState> {
    render() {
        return (
            <div className="view view-first">
                <span className="img" style={{backgroundImage: `url(${this.props.img})`}} />
                <div className="mask">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.text}</p>
                    <a href={this.props.url} className="info">link</a>
                </div>
            </div>
        );
    }
}
