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
        return (currentTodos.filter((todo) => todo.id != id))
    }
    )
}

export { handleDelete, handleChange }