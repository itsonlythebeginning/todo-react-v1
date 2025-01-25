import "./TodoCreate.css"
import {useState, useContext} from "react";
import TasksContext from "../context/TasksContext";

function TodoCreate() {


    const [title, setTitle] = useState("")


    const {addTodoTask} = useContext(TasksContext)


    const handleChange = (event) => {
        setTitle(event.target.value)
    }


    const handleSubmit = (event) => {
        event.preventDefault()

        addTodoTask(title)

        setTitle("")

    }





    return (

        <div className="todoCreate">
            <form className="todoCreate__form" onSubmit={handleSubmit}>
                <input className="todoCreate__form-input" value={title} onChange={handleChange} placeholder="What need to be done?"/>
                <button className="todoCreate__form-button">Add Task</button>
            </form>
        </div>

    )

}




export default TodoCreate


