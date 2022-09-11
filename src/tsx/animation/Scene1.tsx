import * as React from "react";
import "./Scene1.scss"

export interface Screen1Props {
    finishTrigger: Function
}
export interface Screen1State {
}

export default class Screen1 extends React.Component<Screen1Props, Screen1State> {

    private scene1: HTMLDivElement;
    private backgroud: HTMLDivElement;
    private chapter0: HTMLDivElement;
    private chapter1: HTMLDivElement;
    private chapter2: HTMLDivElement;
    private chapter0__end: HTMLDivElement;
    private chapter1__end: HTMLDivElement;
    private chapter2__end: HTMLDivElement;

    private chapter1__middle: HTMLDivElement;

    componentDidMount() {
        this.startChapter0()
    }

    startChapter0() {
        this.chapter0.setAttribute('data-state', 'active')
        this.chapter0__end.addEventListener('animationend', () => {
            console.log("animationend. chapter0")
            this.startChapter1()
        })
    }

    startChapter1() {
        this.chapter1.setAttribute('data-state', 'active')
        this.chapter1__middle.addEventListener('animationstart', () => {
            console.log("animationstart. chapter1")
            this.chapter0.setAttribute('data-state', 'remove')
        })
        this.chapter1__end.addEventListener('animationend', () => {
            console.log("animationend. chapter1")
            this.startChapter2()
        })
    }

    startChapter2() {
        // this.chapter2.setAttribute('data-state', 'active')
        // this.chapter2__end.addEventListener('animationend', () => {
        //     console.log("animationend. chapter2")
            this.finish()
        // })
        
    }

    finish() {
        this.scene1.setAttribute('data-state', 'displayNone')
        this.backgroud.addEventListener('animationend', () => {
            console.log("animationend. scene1")
            this.props.finishTrigger();
        })
    }

    render() {
        return (
            <div className="scene1" ref={(ctx) => this.scene1 = ctx} >
                <div className="chapter background"  ref={(ctx) => this.backgroud = ctx} />
                <div className="chapter chapter-0" ref={(ctx) => this.chapter0 = ctx} data-state="">
                    <div className="chapter-0__view-1" ref={(ctx) => this.chapter0__end = ctx} >
                        Hello World.
                    </div>
                </div>
                <div className="chapter chapter-1" ref={(ctx) => this.chapter1 = ctx} data-state="">
                    <div className="chapter chapter-1__view-1">
                        <div className="effect" />
                        <div className="effect" ref={(ctx) => this.chapter1__middle = ctx} />
                        <div className="effect" ref={(ctx) => this.chapter1__end = ctx} />
                    </div>
                </div>
                <div className="chapter chapter-2" ref={(ctx) => this.chapter2 = ctx} data-state="">
                    <div className="chapter-2__view-1">
                        <div />
                        <div />
                        <div ref={(ctx) => this.chapter2__end = ctx} />
                    </div>
                </div>
                <div className="chapter chapter-3" data-state="">
                    <div className="chapter-3__view-1">
                        <div />
                        <div />
                        <div />
                    </div>
                </div>
                <button className="skipbutton" onClick={() => this.props.finishTrigger()}>
                    SKIP {">>"}
                </button>
            </div>
        );
    }
}
