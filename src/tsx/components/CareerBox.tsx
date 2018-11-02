import * as React from "react";
import ScrollReveal from "scrollreveal"
import "./CareerBox.scss";

export interface CareerBoxProps {
    year: string,
    title: string,
    text: string,
}
export interface CareerBoxState {
}

export default class CareerBox extends React.Component<CareerBoxProps, CareerBoxState> {

    componentDidMount() {
        const config = (origin: string, duration: number, delay: number, distance: number): any => {
            return {
                origin: origin,
                duration: duration,
                delay: delay,
                distance: distance + 'px',
                scale: 1,
                easing: 'ease',
                reset: true
            }
        }
        // ScrollReveal().reveal(this.refs.border, config0)
        // ScrollReveal().reveal(this.refs.point, config0)
        ScrollReveal().reveal(this.refs.box1, config('right', 400, 800, 30))
        ScrollReveal().reveal(this.refs.box2, config('left', 1000, 150, 60))
    }


    render() {
        return (
            <>
                <div className="career_box">
                    <div className="year">{this.props.year}</div>
                    <div className="graph">
                        <div className="border" ref='border'></div>
                        <div className="point" ref='point'></div>
                    </div>
                    <div className="mark" ref='box1'></div>
                    <div className="box" ref='box2'>
                        <div className="title">{this.props.title}</div>
                        <div className="split" />
                        <div className="text">{this.props.text}</div>
                    </div>
                </div>
            </>
        );
    }
}
