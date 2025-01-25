import "./TodoEdit.css"
import {useState, useContext} from "react";
import TasksContext from "../context/TasksContext";


function TodoEdit({onEdit, task}) {


    const {editTaskByID} = useContext(TasksContext)

    const [newTitle, setNewTitle] = useState(task.title)

    const handleChange = (event) => {
        setNewTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        editTaskByID(task.id, newTitle)

        onEdit()
    }


    return (

        <div className="todoEdit">
            <form className="todoEdit__form" onSubmit={handleSubmit}>
                <input className="todoEdit__form-input" value={newTitle} onChange={handleChange}/>
                <button className="todoEdit__form-button">Change</button>
            </form>
        </div>

    )

}




export default TodoEdit


