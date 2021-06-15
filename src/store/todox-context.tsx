import React from "react"
import { useState } from "react"
import Todo from "../models/todo"

type TodosContextObj = {
    items: Todo[]
    addTodo: (todo: string) => void
    removeTodo: (todoId: string) => void
}

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: (todoId: string) => {},
})

const TodosContextProvider: React.FC = (props) => {
    const [todos, setTodos] = useState<Todo[]>([])

    const addTodo = (todo: string) => {
        setTodos((prevTodos) => {
            return [...prevTodos, new Todo(todo)]
        })
    }

    const removeTodo = (todoId: string) => {
        setTodos((prevTodos) => {
            return [...prevTodos].filter((x) => x.id !== todoId)
        })
    }

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo,
        removeTodo,
    }

    return (
        <TodosContext.Provider value={contextValue}>
            {props.children}
        </TodosContext.Provider>
    )
}

export default TodosContextProvider
