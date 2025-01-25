import "./TodoSearch.css"
import {useState, useContext} from "react";
import TasksContext from "../context/TasksContext";




function TodoSearch() {

    const {showOnlyDoneTasks, showOnlyActiveTasks, showAllTasks, searchTodoByTerm} = useContext(TasksContext)

    const [term, setTerm] = useState("")
    const handleChange = (event) => {
        setTerm(event.target.value)
        searchTodoByTerm(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
    }
    const handleActiveClick = () => {
        showOnlyDoneTasks()
    }

    const handleDoneClick = () => {
        showOnlyActiveTasks()
    }

    const handleAllClick = () => {
        showAllTasks()
    }

    return (

        <div className="todoSearch">

            <form className="todoSearch__form" onSubmit={handleSubmit}>
                <input className="todoSearch__form-input" onChange={handleChange} value={term} placeholder="Type text to search"/>
            </form>

            <div className="todoSearch__actions">
                <button className="todoSearch__actions-all todoSearch__actions-button todoSearch__actions_active" onClick={handleAllClick}>All</button>
                <button className="todoSearch__actions-active todoSearch__actions-button" onClick={handleActiveClick}>Active</button>
                <button className="todoSearch__actions-done todoSearch__actions-button" onClick={handleDoneClick}>Done</button>
            </div>

        </div>

    )



}


export default TodoSearch