import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import 'bootstrap/dist/css/bootstrap.css';

import "./global.css";
import App from "../src/components/App";

const container = document.getElementById("app");

ReactDOM.render(<App />, container);

serviceWorker.unregister();
