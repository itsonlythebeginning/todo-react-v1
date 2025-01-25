import "./TodoList.css"
import {useContext} from "react";
import TodoShow from "./TodoShow";
import TasksContext from "../context/TasksContext";


function TodoList() {


    const {tasks} = useContext(TasksContext)


    const renderedTasks = tasks.map(function (task, index) {
        return <TodoShow task={task} key={task.id}/>
    })


    return (

        <div className="todoList">
            {renderedTasks}
        </div>

    )

}




export default TodoList


