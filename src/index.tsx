import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
let number = document.querySelector("span") as HTMLParagraphElement;

const countModifier = (count: number = 0, action: any) => {
    switch (action.type) {
        case "ADD":
            return count + 1;
        case "MINUS":
            return count - 1;
        default:
            return count;
    }
};
const countStore = createStore(countModifier);
const onChange = () => {
    number.innerText = countStore.getState() + "";
};
countStore.subscribe(onChange);
add?.addEventListener("click", () => countStore.dispatch({ type: "ADD" }));
minus?.addEventListener("click", () => countStore.dispatch({ type: "MINUS" }));

// const root = ReactDOM.createRoot(
//     document.getElementById("root") as HTMLElement
// );
// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );
