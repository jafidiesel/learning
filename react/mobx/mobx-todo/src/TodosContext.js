import { useLocalObservable } from "mobx-react-lite";
import React from "react";
import { createTodoStore } from "./TodoStore";

const TodosContext = React.createContext(null);

export const TodosProvider = ({children}) => {
	const todosStore = useLocalObservable(() => createTodoStore())
	return (<TodosContext.Provider value={todosStore}>
		{children}
	</TodosContext.Provider>)
}

export const useTodosStore = () => React.useContext(TodosContext);