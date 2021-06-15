import React from "react"
import { useContext } from "react"

import { TodosContext } from "../store/todox-context"
import TodoItem from "./TodoItem"

import styles from "./Todos.module.css"

const Todos: React.FC = () => {
    const todosCtx = useContext(TodosContext)

    return (
        <ul className={styles.todos}>
            {todosCtx.items.map((item) => (
                <TodoItem
                    key={item.id}
                    text={item.text}
                    id={item.id}
                    removeTodo={todosCtx.removeTodo}
                />
            ))}
        </ul>
    )
}

export default Todos
