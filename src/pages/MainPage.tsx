import React, {useState, ChangeEvent} from "react";
import TodoInput from "../component/TodoInput";
import TodoList from "../component/TodoList";
import DoneList from "../component/DoneList";
import useLocalStorage from "../hook/useLocalStorage";
import './MainPage.css';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const MainPage: React.FC = () => {
    const [todo, setTodo] = useState<string>("");
    const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);
    const [doneTodos, setDoneTodos] = useLocalStorage<Todo[]>("doneTodos", []);

    const handleChangeTodo = (event: ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value);
    };

    const handleAdd = () => {
        if (todo.trim() !== '') {
            const newTodo: Todo = { id: Date.now(), text: todo, completed: false };
            setTodos([...todos, newTodo]);
            setTodo('');
        }
    };

    const handleDelete = (index: number) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    const handleDeleteDone = (index: number) => {
        setDoneTodos(doneTodos.filter((_, i) => i !== index));
    };

    const handleToggleComplete = (index: number) => {
        const updatedTodos = todos.map((todo, i) => {
            if (i === index) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });

        const completedTodos = updatedTodos.filter(todo => todo.completed);
        const incompleteTodos = updatedTodos.filter(todo => !todo.completed);

        setTodos(incompleteTodos);
        setDoneTodos([...doneTodos, ...completedTodos]);
    };

    const handleToggleUnComplete = (index: number) => {
        const updatedDoneTodos = doneTodos.map((todo, i) => {
            if (i === index) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });

        const completedTodos = updatedDoneTodos.filter(todo => todo.completed);
        const incompleteTodos = updatedDoneTodos.filter(todo => !todo.completed);

        setTodos([...todos, ...incompleteTodos]);
        setDoneTodos(completedTodos);
    };

    return (
        <div className="MainPage">
            <TodoInput todo={todo} onChange={handleChangeTodo} onAdd={handleAdd} />

            <section>
                <h2>~ing</h2>
                <TodoList
                    todos={todos}
                    onDelete={handleDelete}
                    onToggleComplete={handleToggleComplete}
                />
            </section>

            <hr />

            <section>
                <h2>Done</h2>
                <DoneList
                    todos={doneTodos}
                    onDelete={handleDeleteDone}
                    onToggleComplete={handleToggleUnComplete}
                />
            </section>
        </div>
    );
}

export default MainPage;