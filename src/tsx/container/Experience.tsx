import * as React from "react";
import ReactMarkdown from "react-markdown";
import "./Experience.scss";
import remarkGfm from "remark-gfm";
import MarkdownText from "../../asset/experience.md"
import {AppProps} from "../App";

export default class Experience extends React.Component<{}, {text: string}> {

    constructor(props: AppProps) {
        super(props)
        this.state = { text: "" }
    }

    componentDidMount() {
        (async () => {
            const text = await fetch(MarkdownText)
            this.setState({ text: await text.text() })
        })()
    }

    render() {
        return (
            <div id="experience">
                <div id="experience_backgroud">
                    <ReactMarkdown children={this.state.text} remarkPlugins={[remarkGfm]} />
                </div>
            </div>
        );
    }
}
