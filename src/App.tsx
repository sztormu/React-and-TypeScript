import Todos from "./components/Todos"

import "./App.css"
import NewTodo from "./components/NewTodo"
import TodosContextProvider from "./store/todox-context"

//const INITIAL_TODOS = [new Todo("Learn React"), new Todo("Learn TypeScript")]

const App = () => {
    return (
        <TodosContextProvider>
            <NewTodo />
            <Todos />
        </TodosContextProvider>
    )
}

export default App
