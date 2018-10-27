import * as React from "react";
import "./CareerBox.scss";

export interface CareerBoxProps {
    year: string,
    title: string,
    text: string,
}
export interface CareerBoxState {
}

export default class CareerBox extends React.Component<CareerBoxProps, CareerBoxState> {
    render() {
        return (
            <>
                <div className="career_box">
                    <div className="year">{this.props.year}</div>
                    <div className="graph">
                        <div className="border"></div>
                        <div className="point"></div>
                    </div>
                    <div className="mark"></div>
                    <div className="box">
                        <div className="title">{this.props.title}</div>
                        <div className="split" />
                        <div className="text">{this.props.text}</div>
                    </div>
                </div>
            </>
        );
    }
}
