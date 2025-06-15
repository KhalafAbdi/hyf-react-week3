'use client';

import { useState } from 'react';

function TodoList() {
    const [newTodo, setNewTodo] = useState('');
    const [todos, setTodos] = useState([]);

    const handleAddTodo = () => {
        setTodos((previous) => [
            ...previous,
            {
                id: Math.random(),
                todo: newTodo
            }
        ]);
        setNewTodo('');
    };

    const handleRemove = (elementToDelete) => {
        setTodos((previous) =>
            previous.filter((element) => element !== elementToDelete)
        );
    };

    return (
        <div className="list-container">
            <div className="todo-action">
                <input
                    className="todo-input"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button
                    className="btn btnPrimary todo-button"
                    onClick={handleAddTodo}
                >
                    Add todo
                </button>
            </div>
            <ul className="todo-list">
                {todos.map((todo) => (
                    <li key={todo.id} className="todo-item">
                        {todo.todo}
                        <button
                            onClick={() => handleRemove(todo)}
                            className="btn delete-todo"
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export function TodoDemo() {
    return (
        <div className="map-demo">
            <h2>Map Demo</h2>
            <p>This demonstrates rendering lists using map()</p>
            <TodoList />
        </div>
    );
}
