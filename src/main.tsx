import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// eslint-disable-next-line
import "swiper/css/bundle";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
