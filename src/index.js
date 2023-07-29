import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import {BrowserRouter} from "react-router-dom";
// import { Provider } from "react-redux";
// import Store from "./Redux/Store";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
    {/* <Provider store={Store}> */}
        <App />
    {/* </Provider> */}
        
    </BrowserRouter>
)