import React from 'react';
import { useLocalStore, useObserver } from 'mobx-react'

const StoreContext = React.createContext();

const StoreProvider = ({children}) => {
	const store = useLocalStore( () => ({
		bugs: ["ant"],
		addBug: (bug) => {
			store.bugs.push(bug)
		},
		get bugsCount(){
			return store.bugs.length;
		}
	}));

	return (
		<StoreContext.Provider value={store}>{children}</StoreContext.Provider>
	)
}

const BugsHeader = () => {
	const store = React.useContext(StoreContext);
	return useObserver (() => <h1>{store.bugsCount} bugs!</h1>)
}

const BugList = () => {
	const store = React.useContext(StoreContext);

	return useObserver( () => (
		<ul>
			{store.bugs.map(bug => <li key={bug}>{bug}</li>)}
		</ul>
	))
}

const BugsForm = () => {
	const store = React.useContext(StoreContext);
	const [bug, setBug] = React.useState("")

	return (
		<form onSubmit={e =>{
			store.addBug(bug);
			e.preventDefault();
			
			setBug("")
		}}>
			<input type="text" value={bug} onChange={e => {setBug(e.target.value)}} />
			<button type="submit" >Add</button>
		</form>
	)
}

function App() {


	return (
		<StoreProvider>
			<BugsHeader/>
			<BugList />
			<BugsForm />
		</StoreProvider>
	);
}

export default App;
