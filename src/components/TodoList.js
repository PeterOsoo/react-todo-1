import { useState } from "react"
import Todo from "./Todo"

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
				<p>There are no Todo items at the moment</p>
			)}

			{/* display todo items */}
			<ul className="list-group">
				{todos.map(todo => (
					<Todo key={todo.id} todo={todo} removeTodo={removeTodo} />
				))}
			</ul>
		</div>
	)
}

export default TodoList
