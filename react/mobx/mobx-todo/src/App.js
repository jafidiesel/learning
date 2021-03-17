
import './App.css';
import { NewTodoForm } from './NewTodoForm';
import { useTodosStore } from './TodosContext';
import { useObserver } from 'mobx-react-lite';

function App() {
	const todoStore = useTodosStore();
	return useObserver( () => (
		<>
			<ul>
				{todoStore.todos.map( todo=> (
					<li
						key={todo.id}
					>
						{todo.text}
						
						<span onClick={
							() =>todoStore.removeTodo(todo.id)
						}> <b>(remove)</b></span>
					</li>
				))}
			</ul>
			<NewTodoForm />
		</>
	));
}

export default App;
