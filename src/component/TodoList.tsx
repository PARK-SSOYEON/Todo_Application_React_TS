import React from "react";
import TodoItem from "./TodoItem";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoListProps {
    todos: Todo[];
    onDelete: (index: number) => void;
    onToggleComplete: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete, onToggleComplete }) => {
    return (
        <ul>
            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    todo={todo}
                    onDelete={()=>onDelete(index)}
                    onToggleComplete={()=>onToggleComplete(index)}
                />
            ))}
        </ul>
    );
}

export default TodoList;