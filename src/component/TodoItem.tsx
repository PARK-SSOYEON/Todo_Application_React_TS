import React from "react";
import "./TodoItem.css"

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoItemProps {
    todo: Todo;
    onDelete: () => void;
    onToggleComplete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onToggleComplete }) => {
    return (
        <li>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={onToggleComplete}
            />
            {todo.text}
            <button onClick={onDelete}>삭제</button>
        </li>
    );
}

export default TodoItem;