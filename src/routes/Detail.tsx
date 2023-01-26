import { AnyMxRecord } from "dns";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { add, remove } from "../store";

function Detail(toDos: any, onBtnClick: any) {
    const id = useParams().id;
    console.log(toDos.toDos);
    const toDo = toDos.toDos.find((toDo: any) => toDo.id === parseInt(id!));
    const navigate = useNavigate();

    const handleDel = () => {
        onBtnClick(id);
        navigate("/");
    };
    return (
        <>
            <h1>{toDo?.text}</h1>
            <h5>Craeted at:{toDo?.id}</h5>
        </>
    );
}

function mapStateToProps(state: any) {
    return { toDos: state };
}
function mapDispatchToProps(dispatch: any) {
    return { onBtnClick: (id: any) => dispatch(remove(id)) };
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
