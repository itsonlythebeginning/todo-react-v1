import "./TodoStatus.css"
import {useContext} from "react";
import TasksContext from "../context/TasksContext";




function TodoStatus() {

    const {activeCount, doneCount} = useContext(TasksContext)



    return (

        <div className="todoStatus">
            <div className="todoStatus__more">
                <p className="todoStatus__more-counter">{activeCount}</p>
                <p className="todoStatus__more-title">active</p>
            </div>
            <div className="todoStatus__done">
                <p className="todoStatus__done-counter">{doneCount}</p>
                <p className="todoStatus__done-title">done</p>
            </div>
        </div>

    )

}


export default TodoStatus