import { useState } from "react"

const TodoList = () => {
	const [todos, setTodos] = useState([])
	const [newTodo, setNewTodo] = useState("")

	// add todo
	const addTodo = () => {
		if (newTodo.trim() !== "") {
			setTodos([...todos, { id: Date.now(), text: newTodo }])
			setNewTodo("")
			console.log("button works")
		}
	}

	// remove specific todo
	const removeTodo = id => {
		setTodos(todos.filter(todo => todo.id !== id))
	}

	return (
		<div className="container mt-5">
			<h1 className="text-center mb-4">Todo App</h1>
			<div className="input-group mb-3">
				<input
					type="text"
					value={newTodo}
					onChange={e => setNewTodo(e.target.value)}
					className="form-control"
				/>
				<div className="input-group-append">
					<button onClick={addTodo} className="btn btn-primary">
						Add Todo
					</button>
				</div>
			</div>

			{todos.length > 0 ? (
				<h3 className="text-center my-2">Todo List</h3>
			) : (
				<p>There are no Todo items</p>
			)}

			<ul className="list-group">
				{todos.map(todo => (
					<li
						key={todo.id}
						className="list-group-item d-flex justify-content-between align-items-center"
					>
						{todo.text}
						<button
							onClick={() => removeTodo(todo.id)}
							className="btn btn-danger btn-sm"
						>
							Remove
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default TodoList