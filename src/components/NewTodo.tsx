import { useContext } from "react"
import { useRef } from "react"
import { TodosContext } from "../store/todox-context"
import styles from "./NewTodo.module.css"

const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext)
    const textRef = useRef<HTMLInputElement>(null)

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()

        const textRefValue = textRef.current!.value

        if (textRefValue.trim().length === 0) {
            //throw an error
            return
        }
        todosCtx.addTodo(textRefValue)
    }

    return (
        <form onSubmit={submitHandler} className={styles.form}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id="text" ref={textRef}></input>
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo
