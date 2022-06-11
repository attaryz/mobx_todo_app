import { observer } from "mobx-react-lite"
import TodoStore from "../../stores/TodoStore"

const TodoList = ({ todos }: { todos: TodoStore }) => {
  return (
    <ul>
      {todos.list.map((t) => (
        <li key={t.id}>{t.title}</li>
      ))}
    </ul>
  )
}

export default observer(TodoList)
