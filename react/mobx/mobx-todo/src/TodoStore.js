import { nanoid } from 'nanoid'

export function createTodoStore() {
	return {
		todos: [],
		addTodo(text) {
			this.todos.push({
				text, id: nanoid()
			})
		},
		removeTodo(id) {
			this.todos = this.todos.filter( todo => todo.id !== id)
		}
	}
}