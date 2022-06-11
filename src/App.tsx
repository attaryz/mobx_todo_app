import TodoStore from "./stores/TodoStore"
import TodoInput from "./Todo/TodoInput"
import TodoList from "./Todo/TodoList"

const todos = new TodoStore()

const App = () => {
  return (
    <>
      <TodoInput todos={todos} />
      <TodoList todos={todos} />
    </>
  )
}

export default App
