import * as React from "react";
import ReactMarkdown from "react-markdown";
import "./Experience.scss";
import remarkGfm from "remark-gfm";
import MarkdownText from "../../asset/experience.md"

export interface ExperienceProps {
    onHiddenExperience: () => void
}

export default class Experience extends React.Component<ExperienceProps, {text: string}> {

    constructor(props: ExperienceProps) {
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
                <div id="experience_background">
                    <ReactMarkdown children={this.state.text} remarkPlugins={[remarkGfm]} />
                </div>
                <div id="close_button" onClick={this.props.onHiddenExperience}>CLOSE</div>
            </div>
        );
    }
}
