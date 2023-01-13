import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createStore } from "redux";
const form = document.querySelector("form");
const input = document.querySelector("input") as HTMLInputElement;
const ul = document.querySelector("ul") as HTMLUListElement;

interface toDoProps {
    id: number;
    text: string;
}

const addToDo = (text: string) => {
    return {
        type: "ADD_TODO",
        text,
    };
};

const deleteToDo = (id: number) => {
    return {
        type: "DELETE_TODO",
        id,
    };
};

const counterReducer = (state: any = [], action: any) => {
    switch (action.type) {
        case "ADD_TODO":
            return [{ text: action.text, id: Date.now() }, ...state];
        case "DELETE_TODO":
            return state.filter((toDo: toDoProps) => toDo.id !== action.id);
        default:
            return state;
    }
};

const store = createStore(counterReducer);

const paintToDos = () => {
    const toDos = store.getState();
    ul.innerText = "";
    toDos.forEach((toDo: any) => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.innerText = "DEL";
        btn.addEventListener("click", dispatchdeleteToDo);
        li.id = toDo.id;
        li.innerText = toDo.text;
        li.appendChild(btn);
        ul.appendChild(li);
    });
};

store.subscribe(paintToDos);

const dispatchdeleteToDo = (e: any) => {
    const id = parseInt(e.target.parentNode.id);
    store.dispatch(deleteToDo(id));
};

const dispatchaddToDo = (text: string) => {
    store.dispatch(addToDo(text));
};

const onSubmit = (e: any) => {
    e.preventDefault();
    const toDo = input?.value;
    input.value = "";
    dispatchaddToDo(toDo);
};

form?.addEventListener("submit", onSubmit);
// const root = ReactDOM.createRoot(
//     document.getElementById("root") as HTMLElement
// );
// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );
