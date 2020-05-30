import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import 'bootstrap/dist/css/bootstrap.css';

import "./global.css";
import Blog from "./pages/Blog";


const container = document.getElementById("app");

ReactDOM.render(<Blog />, container);

serviceWorker.unregister();
