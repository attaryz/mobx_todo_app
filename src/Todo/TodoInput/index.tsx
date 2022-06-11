import { ChangeEvent, useState } from "react"
import TodoStore from "../../stores/TodoStore"
import { Input, Button } from "@chakra-ui/react"
import "./style.css"

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
      <div className="input-group">
        <Input
          className="input"
          type="text"
          placeholder="Add Todo"
          value={newTodo}
          onChange={handleInputChange}
        />
        <Button
          onClick={handleButtonClick}
          colorScheme="teal"
          size="md"
          className="button">
          Add Todo
        </Button>
      </div>
    </>
  )
}

export default TodoInput
