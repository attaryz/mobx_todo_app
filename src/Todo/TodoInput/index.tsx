import { ChangeEvent, useState } from "react"
import TodoStore from "../../stores/TodoStore"

const TodoInput = ({ todos }: { todos: TodoStore }) => {
  const [newTodo, setNewTodo] = useState("")

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
  }
  const handleButtonClick = () => {
    todos.add(newTodo)
    setNewTodo("")
  }
  return (
    <>
      <input type="text" value={newTodo} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Add Todo</button>
    </>
  )
}

export default TodoInput
