import * as React from "react";
import Experience from "./container/Experience";
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
    showExperience: boolean
}

const initState = {
    openingFinished: false,
    showExperience: false
}

export default class App extends React.Component<AppProps, AppState> {

    constructor(props: AppProps) {
        super(props)
        this.state = initState
        this.onFinishedOpening = this.onFinishedOpening.bind(this)
        this.onShowExperience = this.onShowExperience.bind(this)
        this.onHiddenExperience = this.onHiddenExperience.bind(this)
    }

    onFinishedOpening() {
        this.setState({openingFinished: true})
    }

    onShowExperience() {
        this.setState({showExperience: true})
    }

    onHiddenExperience() {
        window.scrollTo(0, 0);
        this.setState({showExperience: false})
    }

    render() {

        if (!this.state.openingFinished) {
            return <Scene1 finishTrigger={this.onFinishedOpening}/>
        }
        if (this.state.showExperience) {
            return <Experience onHiddenExperience = {this.onHiddenExperience}/>
        }
        return <>
            <Header/>
            <AboutMe/>
            <SkillSet/>
            <Product/>
            <Career onShowExperience={this.onShowExperience}/>
            <Contact/>
            <Footer/>
        </>
    }
}