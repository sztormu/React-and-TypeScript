import React from "react"
import styles from "./TodoItem.module.css"

const TodoItem: React.FC<{
    text: string
    id: string
    removeTodo: (todoId: string) => void
}> = (props) => {
    const deleteHandler = () => {
        props.removeTodo(props.id)
    }

    return (
        <li className={styles.item} onClick={deleteHandler}>
            {props.text}
        </li>
    )
}

export default TodoItem
