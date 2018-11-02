import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./tsx/components/Hello";
import App from "./tsx/App"

import "./style.scss"

ReactDOM.render(<App />, document.getElementById("example"));
// ReactDOM.render(<Hello compiler="TypeScript" framework="React" />, document.getElementById("example"));
