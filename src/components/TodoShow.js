import "./TodoShow.css"
import {useState, useContext} from "react";
import TodoEdit from "./TodoEdit";
import TasksContext from "../context/TasksContext";



function TodoShow({task}) {

    const {deleteTodoTask, doneTaskById} = useContext(TasksContext)

    const [showEdit, setShowEdit] = useState(false)


    const handleDeleteClick = () => {
        deleteTodoTask(task.id , task)
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    const handleDoneClick = () => {
        doneTaskById(task.id, task)
    }



    let currentDisplay

    if (task.isVisibility) {
        currentDisplay = "flex"
    }
    else {
        currentDisplay = "none"
    }


    let currentOpacity

    if (task.done) {
        currentOpacity = 0.35
    }
    else {
        currentOpacity = 1
    }



    const activeButton = <button onClick={handleDoneClick} className="todoShow__task-actions-done todoShow__task-actions-button todoShow__task-actions-button_active">!</button>
    const doneButton = <button onClick={handleDoneClick} className="todoShow__task-actions-done todoShow__task-actions-button todoShow__task-actions-button_done">✓</button>

    let renderedButton

    if (task.done) {
        renderedButton = doneButton
    }
    else {
        renderedButton = activeButton
    }



    let renderedContent

    if (showEdit) {
        renderedContent = <TodoEdit onEdit={handleEditClick} task={task} />
    }

    else {
        renderedContent =
            <div className="todoShow__task" style={{display: currentDisplay}}>
                <h2 className="todoShow__task-title" style={{opacity: currentOpacity}}>{task.title}</h2>

                <div className="todoShow__task-actions">
                    <button className="todoShow__task-actions-edit todoShow__task-actions-button" disabled={task.done} onClick={handleEditClick}>Edit</button>
                    {renderedButton}
                    <button className="todoShow__task-actions-delete todoShow__task-actions-button" onClick={handleDeleteClick}>X</button>
                </div>
            </div>
    }


    return (

        <div className="todoShow">
            {renderedContent}
        </div>

    )

}




export default TodoShow


