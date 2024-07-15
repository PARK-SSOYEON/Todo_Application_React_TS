import React from "react";
import "./TodoInput.css";

interface TodoInputProps {
    todo: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onAdd: () => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ todo, onChange, onAdd }) => {
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onAdd();
        }
    };

    return (
        <label>
            <input
                id="taskInput"
                type="text"
                value={todo}
                onChange={onChange}
                onKeyPress={handleKeyPress}
            />
            <button id="inputButton" type="submit" onClick={onAdd}>+</button>
        </label>
    );
}

export default TodoInput;