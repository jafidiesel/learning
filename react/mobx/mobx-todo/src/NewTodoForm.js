import React from 'react'
import { useTodosStore } from './TodosContext';

export const NewTodoForm = () => {
	const [ todoText, setTodoText] = React.useState("");
	const todoStore = useTodosStore()

	return <>
		<input type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)}/>
		<button onClick={ () =>todoStore.addTodo(todoText)}>Add note</button>
	</>
}