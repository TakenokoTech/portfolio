import * as React from "react";
import Header from "./container/Header";
import AboutMe from "./container/AboutMe"
import SkillSet from "./container/SkillSet";
import Product from "./container/Product";
import Career from "./container/Career";
import Contact from "./container/Contact";
import Footer from "./container/Footer";

import Scene1 from "./animation/Scene1"

export interface AppProps {
}
export interface AppState {
    openingFinished: boolean
}

const initState = {
    openingFinished: false
}

export default class App extends React.Component<AppProps, AppState> {

    constructor(props: AppProps) {
        super(props)
        this.state = initState
        this.onFinishedOpening = this.onFinishedOpening.bind(this)
    }

    onFinishedOpening() {
        const state: AppState = { openingFinished: true }
        this.setState(state)
    }

    render() {
        return this.state.openingFinished ?
            <>
                <Header />
                <AboutMe />
                <SkillSet />
                <Product />
                <Career />
                <Contact />
                <Footer />
            </>
            :
            <>
                <Scene1 finishTrigger={this.onFinishedOpening} />
            </>

    }
}