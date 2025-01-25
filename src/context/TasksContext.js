import {useState, createContext} from "react";


const TasksContext = createContext()


function Provider({children}) {


    const [tasks, setTasks] = useState([
        {"id" : "111", "title": "Привет, как дела", "done": false, "isVisibility": true},
        {"id" : "222", "title": "Hello Word!!!", "done": true, "isVisibility": true}
    ])


    let activeTasksCount = 0
    let doneTasksCount = 0


    tasks.forEach(function (task) {

        if (!task.done) {
            activeTasksCount++
        }
        else {
            doneTasksCount++
        }

    })


    const [activeCount, setActiveCount] = useState(activeTasksCount)
    const [doneCount, setDoneCount] = useState(doneTasksCount)

    // useEffect( () => {
    //     setActiveCount(activeTasksCount)
    //     setDoneCount(doneTasksCount)
    // }, [activeTasksCount, doneTasksCount]  )


    const addTodoTask = (title) => {

        const randomId = Math.round(Math.random() * 9999)

        setActiveCount(activeCount+1)

        setTasks([...tasks, {id : randomId, title: title, done: false, isVisibility: true}])


    }



    const deleteTodoTask = (id , task) => {

        const updatedArr = tasks.filter(function (task) {
            return task.id !== id
        })


        if (task.done) {
            setDoneCount(doneCount-1)
        }
        else {
            setActiveCount(activeCount-1)
        }

        setTasks(updatedArr)

    }


    const editTaskByID = (id, newTitle) => {

        const updatedArr = tasks.map(function (task) {

            if (task.id === id) {
                return {...task, title: newTitle}
            }
            else {
                return task
            }

        })

        setTasks(updatedArr)

    }




    const doneTaskById = (id ,task) => {

        const updatedArr = tasks.map(function (task) {

            if (task.id === id) {

                let taskDone = task.done

                return {...task, done: !taskDone}
            }
            else {

                return task
            }

        })


        if (task.done) {
            setDoneCount(doneCount-1)
            setActiveCount(activeCount+1)
        }
        else {
            setActiveCount(activeCount-1)
            setDoneCount(doneCount+1)
        }


        setTasks(updatedArr)

    }




    const showOnlyDoneTasks = () => {

        const updatedArr = tasks.map(function (task) {

            if (task.done) {
                return {...task, isVisibility: false}
            }
            else {
                return {...task, isVisibility: true}
            }

        })

        setTasks(updatedArr)

    }




    const showOnlyActiveTasks = () => {

        const updatedArr = tasks.map(function (task) {

            if (task.done) {
                return {...task, isVisibility: true}
            }
            else {
                return {...task, isVisibility: false}
            }

        })

        setTasks(updatedArr)

    }




    const showAllTasks = () => {

        const updatedArr = tasks.map(function (task) {
            return {...task, isVisibility: true}
        })

        setTasks(updatedArr)

    }



    const searchTodoByTerm = (term) => {

        const updatedArr = tasks.map(function (task) {

            if (task.title.toLowerCase().indexOf(term.toLowerCase()) === -1) {
                return {...task, isVisibility: false}
            }

            else {
                return {...task, isVisibility: true}
            }

        })

        setTasks(updatedArr)

    }




    const valueToShare = {
        tasks: tasks,
        addTodoTask: addTodoTask,
        deleteTodoTask: deleteTodoTask,
        editTaskByID: editTaskByID,
        doneTaskById: doneTaskById,
        showOnlyDoneTasks: showOnlyDoneTasks,
        showOnlyActiveTasks: showOnlyActiveTasks,
        showAllTasks: showAllTasks,
        activeCount: activeCount,
        doneCount: doneCount,
        searchTodoByTerm:searchTodoByTerm,
    }



    return (

        <TasksContext.Provider value={valueToShare}>
            {children}
        </TasksContext.Provider>

    )



}









export {Provider}


export default TasksContext






