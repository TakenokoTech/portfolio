import * as React from "react";
import ScrollReveal from "scrollreveal"
import "./ImageBox.scss";

export interface ImageBoxProps {
    no: number,
    img: string,
    title: string,
    text: string,
    url: string
}
export interface ImageBoxState {
}

export default class ImageBox extends React.Component<ImageBoxProps, ImageBoxState> {

    componentDidMount() {
        const config = {
            origin: 'bottom',
            duration: 1000,
            delay: 150 * this.props.no,
            distance: '100px',
            scale: 1,
            easing: 'ease',
            reset: true
        }
        ScrollReveal().reveal(this.refs.box, config)
    }

    render() {
        return (
            <div className="view" ref='box'>
                <span className="img" style={{ backgroundImage: `url(${this.props.img})` }} />
                <div className="mask">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.text}</p>
                    <a href={this.props.url} className="info">link</a>
                </div>
            </div>
        );
    }
}
