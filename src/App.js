import "./App.css"
import TodoSearch from "./components/TodoSearch";
import TodoStatus from "./components/TodoStatus";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";







function App() {


    return (

        <div className="todoApp">

            <div className="todoApp__header header">
                <h1 className="header-title">TodoApp</h1>
                <TodoStatus/>
            </div>

            <TodoSearch/>

            <TodoList/>

            <TodoCreate/>

        </div>

    )


}




export default App