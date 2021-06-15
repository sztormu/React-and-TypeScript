class Todo {
    id: string
    text: string

    constructor(todoText: string) {
        this.text = todoText
        this.id = (Math.floor(Math.random() * 1000) + 1).toString()
    }
}

export default Todo
