import * as React from "react";
import Header from "./container/Header";
import AboutMe from "./container/AboutMe"
import SkillSet from "./container/SkillSet";
import Product from "./container/Product";
import Career from "./container/Career";
import Contact from "./container/Career";
import Footer from "./container/Header";

export interface AppProps {
}
export interface AppState {
}

export default class App extends React.Component<AppProps, AppState> {

    render() {
        return (
            <>
                <Header />
                <AboutMe />
                <SkillSet />
                <Product />
                <Career />
                <Contact />
                <Footer />
            </>
        )
    }
}