const Todo = ({ todo, removeTodo }) => {
	return (
		<li className="list-group-item d-flex justify-content-between align-items-center">
			{todo.text}
			<button
				onClick={() => removeTodo(todo.id)}
				className="btn btn-danger btn-sm"
			>
				Remove {todo.id}
			</button>
		</li>
	)
}

export default Todo
