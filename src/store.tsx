import { createStore } from "redux";
import {
    createAction,
    createReducer,
    PayloadAction,
    configureStore,
    createSlice,
} from "@reduxjs/toolkit";

interface toDoProps {
    id: number;
    text: string;
}

// pure redux
// const counterReducer = (state: any = [], action: PayloadAction<string>) => {
//     switch (action.type) {
//         case addToDo.type:
//             return [{ text: action.payload, id: Date.now() }, ...state];
//         case deleteToDo.type:
//             return state.filter(
//                 (toDo: toDoProps) => toDo.id !== +action.payload
//             );
//         default:
//             return state;
//     }
// };

// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

// const counterReducer = createReducer(
//     [],

//     // callback사용
//     (builder: any) =>
//         builder
//             .addCase(addToDo, (state: any[], action: PayloadAction<string>) => {
//                 state.push({ text: action.payload, id: Date.now() });
//             })
//             .addCase(
//                 deleteToDo,
//                 (state: any[], action: PayloadAction<string>) => {
//                     return state.filter(
//                         (toDo: toDoProps) => toDo.id !== +action.payload
//                     );
//                 }
//             )
// );

const toDos = createSlice({
    name: "toDosReducer",
    initialState: [],
    reducers: {
        add: (state: any[], action: PayloadAction<string>) => {
            state.push({ text: action.payload, id: Date.now() });
        },
        remove: (state: any, action: PayloadAction<string>) => {
            return state.filter(
                (toDo: toDoProps) => toDo.id !== +action.payload
            );
        },
    },
});
const store = configureStore({ reducer: toDos.reducer });

// export const actionCreators = {
//     addToDo,
//     deleteToDo,
// };

export const { add, remove } = toDos.actions;

export default store;
