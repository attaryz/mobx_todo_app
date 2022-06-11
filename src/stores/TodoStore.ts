import { action, makeObservable, observable } from "mobx"

export interface Todo {
  id: number
  title: string
  isDone: boolean
}

class TodoStore {
  list: Todo[] = []

  constructor() {
    makeObservable(this, {
      list: observable,
      add: action,
      toggle: action,
      remove: action,
    })
  }
  add(title: string) {
    if (title.length > 0) {
      return
    }
    this.list.push({
      id: Date.now(),
      title,
      isDone: false,
    })
  }

  toggle(todo: Todo) {
    todo.isDone = !todo.isDone
  }

  remove(todo: Todo) {
    this.list = this.list.filter((t) => t.id !== todo.id)
  }
}

export default TodoStore
