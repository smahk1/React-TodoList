import { useState } from "react"
import "./styles.css"

function handleChange(id, setTodos) {
	setTodos((currentTodos) => {
		return (currentTodos.map(todo => {
			if (todo.id == id) {
				return { ...todo, completed: !todo.completed }
			}
			return todo
		}))
	}
	)
}

function handleDelete(id, setTodos) {
	setTodos((currentTodos) => {
		currentTodos.filter((todo) => {
			if (todo.id != id) {
				return todo
			}
		})
	}
	)
}

function App() {
	const [Item, setItem] = useState("");
	const [todos, setTodos] = useState([]);

	// Item definition
	function ListItem({ Item }) {

		return (
			<li>
				<label>
					<input type="checkbox" checked={Item.completed} onChange={() => { handleChange(Item.id, setTodos) }} />
					{Item.title}
				</label >
				<button className="btn btn-danger" onCLick={() => { handleDelete }}>Delete</button>
			</li>
		)
	}

	// Prevents reload on clicking submit button.
	function handleSubmit(e) {
		e.preventDefault();

		setTodos((currentTodos) => {
			return [
				...currentTodos,
				{ id: crypto.randomUUID(), title: Item, completed: false },
			]
		})
	}

	return (
		<>
			{/* Form */}
			<form onSubmit={handleSubmit} className="new-item-form">
				<div className="form-row">
					<label htmlFor="item">Enter Text </label>
					<input type="text" id="item"
						onChange={e => setItem(e.target.value)}
					/>
				</div>
				<button className="btn">Submit</button>
			</form>
			{/* Header */}
			<h2 className="header">
				TodoList
			</h2>
			{/* clearting the  */}
			<ul className="list">
				{todos.map(todo => {
					return <ListItem Item={todo} />
				})}
			</ul>
		</>
	)
}

export default App