import * as React from "react";
import Header from "./container/Header";
import AboutMe from "./container/AboutMe"
import SkillSet from "./container/SkillSet";

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
            </>
        )
    }
}