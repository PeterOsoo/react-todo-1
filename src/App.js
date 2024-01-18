import { useState } from "react"
import "./App.css"

const App = () => {
	const [todos, setTodos] = useState([])
	const [newTodo, setNewTodo] = useState("")

	const addTodo = () => {
		if (newTodo.trim() !== "") {
			setTodos([...todos, { id: Date.now(), text: newTodo }])
			console.log("Todo Added")
			setNewTodo("")
		}
	}

	const removeTodo = id => {
		setTodos(todos.filter(todo => todo.id !== id))
	}

	return (
		<div className="App">
			<h1>Todo App</h1>
			<div>
				<input
					type="text"
					value={newTodo}
					onChange={e => setNewTodo(e.target.value)}
				/>
				<button onClick={addTodo}>Add Todo</button>
			</div>

			<h3>Todo List</h3>

			<ul>
				{todos.map(todo => (
					<li key={todo.id}>
						{todo.text}
						<button onClick={() => removeTodo(todo.id)}>Remove</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default App
