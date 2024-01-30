const Todo = ({ todo, removeTodo }) => {
	return (
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
	)
}

export default Todo
