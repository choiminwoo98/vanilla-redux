import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { actionCreators } from "../store";

function Home({ toDos, addToDo }: any) {
    const [text, setText] = useState("");

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        setText(e.currentTarget.value);
    }
    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        addToDo(text);
        setText("");
    }
    return (
        <>
            <h1>To DO</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>Add</button>
            </form>
            <ul>
                {toDos.map((toDo: any) => (
                    <ToDo {...toDo} key={toDo.id} />
                ))}
            </ul>
        </>
    );
}

function mapStateToProps(state: any) {
    return { toDos: state };
}
function mapDispatchToProps(dispatch: any) {
    return {
        addToDo: (text: void) => dispatch(actionCreators.addToDo(text)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
