import React from "react";
import TodoItem from "./TodoItem";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface DoneListProps {
    todos: Todo[];
    onDelete: (index: number) => void;
    onToggleComplete: (index: number) => void;
}

const DoneList: React.FC<DoneListProps> = ({ todos, onDelete, onToggleComplete }) => {
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

export default DoneList;