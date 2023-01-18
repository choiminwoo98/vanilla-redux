import { createStore } from "redux";

interface toDoProps {
    id: number;
    text: string;
}

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text: string) => {
    return {
        type: ADD,
        text,
    };
};
const deleteToDo = (id: string) => {
    return {
        type: DELETE,
        id: parseInt(id),
    };
};

const counterReducer = (state: any = [], action: any) => {
    switch (action.type) {
        case ADD:
            return [{ text: action.text, id: Date.now() }, ...state];
        case DELETE:
            return state.filter((toDo: toDoProps) => toDo.id !== action.id);
        default:
            return state;
    }
};
const store = createStore(counterReducer);

export const actionCreators = {
    addToDo,
    deleteToDo,
};

export default store;
