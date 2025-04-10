import React from "react";
import ReactDOM from "react-dom/client";
import ToDoApp from "./App";
import './Global.css';

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <ToDoApp />
    </React.StrictMode>
);