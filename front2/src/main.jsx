import * as React from "react";
import { render } from "react-dom";
import App from "./App";
import "./styles.css";
const rootElement = document.getElementById("root");
render(React.createElement(App, null), rootElement);
